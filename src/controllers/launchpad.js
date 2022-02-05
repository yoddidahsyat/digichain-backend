const { Launchpad } = require('../../models');

const statusSuccess = "SUCCESS";
const statusFailed = "FAILED";
const messageSuccess = (type) => { return `Launchpad successfully ${type}` }
const messageSuccessSingle = (id, type) => { return `Launchpad with id: ${id} successfully ${type}` }
const messageFailedSingle = (id) => { return `Launchpad with id: ${id} does not exist` };
const messageEmpty = "Data Empty";
const errorResponse = (err, res) => {
    console.log(err);
    res.status(500).send({ error: { message: "Server Error" } })
}

exports.getLaunchpads = async (req, res) => {
    try {
        const launchpads = await Launchpad.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        });

        if(launchpads.length < 1) {
            return res.send({
                status: statusFailed,
                message: messageEmpty,
                data: {
                    launchpad: []
                }
            })
        }

        res.send({
            status: statusSuccess,
            message: messageSuccess('get'),
            data: {
                launchpads
            }
        })
    } catch (err) {
        return errorResponse(err, res);
    }
}

exports.getLaunchpad = async (req, res) => {
    try {
        const {id} = req.params;
        const launchpad = await Launchpad.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        });

        if(!launchpad) {
            return res.status(400).send({
                status: statusFailed,
                message: messageFailedSingle(id),
                data: {
                    launchpad: []
                }
            })
        }

        res.send({
            status: statusSuccess,
            message: messageSuccessSingle(id, 'get'),
            data: {
                launchpad
            }
        })
    } catch (err) {
        return errorResponse(err, res);
    }
}

exports.addLaunchpad = async (req, res) => {
    try {
        const { body } = req;
        if (!body.name || !body.description || !body.token_address) {
            return res.status(400).send({
                status: statusFailed,
                message: ('Invalid request')
            })
        }

        const launchpadData = {
            ...body
        }
        const launchpad = await Launchpad.create(launchpadData);
        res.send({
            status: statusSuccess,
            message: messageSuccess('added'),
            data: {
                launchpad
            }
        })
    } catch (err) {
        return errorResponse(err, res);
    }
}

exports.updateLaunchpad = async (req, res) => {
    try {
        const {id} = req.params;
        const { body: launchpadData } = req;

        const isLaunchpadExist = await Launchpad.findOne({
            where: {
                id
            }
        });
        if (!isLaunchpadExist) {
            return res.status(400).send({
                status: statusFailed,
                message: messageFailedSingle(id),
                data: {
                    launchpad: []
                }
            })
        }

        await Launchpad.update(launchpadData, {
            where: {
                id
            }
        });

        const newLaunchpad = await Launchpad.findOne({
            where: {
                id
            }
        });

        res.send({
            status: statusSuccess,
            message: messageSuccessSingle(id, 'updated'),
            data: {
                launchpad: newLaunchpad
            }
        })
    } catch (err) {
        return errorResponse(err, res);
    }
}

exports.deleteLaunchpad = async (req, res) => {
    try {
        const {id} = req.params;

        const isLaunchpadExist = await Launchpad.findOne({
            where: {
                id
            }
        });
        if (!isLaunchpadExist) {
            return res.status(400).send({
                status: statusFailed,
                message: messageFailedSingle(id),
                data: {
                    launchpad: []
                }
            })
        }

        await Launchpad.destroy({
            where: {
                id
            }
        });
        res.send({
            status: statusSuccess,
            message: messageSuccessSingle(id, 'deleted'),
            data: {
                launchpad: null
            }
        })
    } catch (err) {
        return errorResponse(err, res);
    }
}