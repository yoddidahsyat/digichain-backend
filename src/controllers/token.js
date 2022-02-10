const { Token } = require('../../models');

const statusSuccess = "SUCCESS";
const statusFailed = "FAILED";
const messageSuccess = (type) => { return `Token successfully ${type}` }
const messageSuccessSingle = (id, type) => { return `Token with id: ${id} successfully ${type}` }
const messageFailedSingle = (id) => { return `Token with id: ${id} does not exist` };
const messageEmpty = "Data Empty";
const errorResponse = (err, res) => {
    console.log(err);
    res.status(500).send({ error: { message: "Server Error" } })
}

exports.getTokens = async (req, res) => {
    try {
        const tokens = await Token.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        });

        if(tokens.length < 1) {
            return res.send({
                status: statusFailed,
                message: messageEmpty,
                data: {
                    token: []
                }
            })
        }

        res.send({
            status: statusSuccess,
            message: messageSuccess('get'),
            data: {
                tokens
            }
        })
    } catch (err) {
        return errorResponse(err, res);
    }
}

exports.getToken = async (req, res) => {
    try {
        const {id} = req.params;
        const token = await Token.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        });

        if(!token) {
            return res.status(400).send({
                status: statusFailed,
                message: messageFailedSingle(id),
                data: {
                    token: []
                }
            })
        }

        res.send({
            status: statusSuccess,
            message: messageSuccessSingle(id, 'get'),
            data: {
                token
            }
        })
    } catch (err) {
        return errorResponse(err, res);
    }
}

exports.addToken = async (req, res) => {
    try {
        const { body } = req;
        if (!body.type || !body.name || !body.symbol || !body.decimal || !body.total_supply) {
            return res.status(400).send({
                status: statusFailed,
                message: ('Invalid request')
            })
        }

        const address = generateRandomToken(30);
        
        const tokenData = {
            ...body,
            address
        }
        const token = await Token.create(tokenData);
        res.send({
            status: statusSuccess,
            message: messageSuccess('added'),
            data: {
                token
            }
        })
    } catch (err) {
        return errorResponse(err, res);
    }
}

exports.updateToken = async (req, res) => {
    try {
        const {id} = req.params;
        const { body: tokenData } = req;

        const isTokenExist = await Token.findOne({
            where: {
                id
            }
        });
        if (!isTokenExist) {
            return res.status(400).send({
                status: statusFailed,
                message: messageFailedSingle(id),
                data: {
                    token: []
                }
            })
        }

        await Token.update(tokenData, {
            where: {
                id
            }
        });

        const newToken = await Token.findOne({
            where: {
                id
            }
        });

        res.send({
            status: statusSuccess,
            message: messageSuccessSingle(id, 'updated'),
            data: {
                token: newToken
            }
        })
    } catch (err) {
        return errorResponse(err, res);
    }
}

exports.deleteToken = async (req, res) => {
    try {
        const {id} = req.params;

        const isTokenExist = await Token.findOne({
            where: {
                id
            }
        });
        if (!isTokenExist) {
            return res.status(400).send({
                status: statusFailed,
                message: messageFailedSingle(id),
                data: {
                    token: []
                }
            })
        }

        await Token.destroy({
            where: {
                id
            }
        });
        res.send({
            status: statusSuccess,
            message: messageSuccessSingle(id, 'deleted'),
            data: {
                token: null
            }
        })
    } catch (err) {
        return errorResponse(err, res);
    }
}

function generateRandomToken(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
    return result;
}