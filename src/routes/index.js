const express = require('express')
const router = express.Router()

const { auth } = require('../middlewares/auth');
const { login, checkAuth } = require('../controllers/auth');

const { home } = require('../controllers/home')
const { getLaunchpads, getLaunchpad, addLaunchpad, updateLaunchpad, deleteLaunchpad } = require('../controllers/launchpad')
const { getTokens, getToken, addToken, updateToken, deleteToken } = require('../controllers/token')


// ---------------------- AUTH ------------------------ //
// router.post('/register', register)
router.post('/login', login)
router.get('/auth', auth, checkAuth)

// ---------------------- HOME ---------------------- //
router.get('/', home)

// ------------------- LAUNCHPAD ------------------- //
router.get('/launchpads', getLaunchpads)
router.get('/launchpad/:id', getLaunchpad)
router.post('/launchpad', addLaunchpad)
router.patch('/launchpad/:id', auth, updateLaunchpad)
router.delete('/launchpad/:id', auth, deleteLaunchpad)

// ------------------- TOKEN ------------------- //
router.get('/tokens', getTokens)
router.get('/token/:id', getToken)
router.post('/token', addToken)
router.patch('/token/:id', auth, updateToken)
router.delete('/token/:id', auth, deleteToken)

module.exports = router