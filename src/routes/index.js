const express = require('express')
const router = express.Router()

// const { auth } = require('../middlewares/auth');

const { home } = require('../controllers/home')
const { getLaunchpads, getLaunchpad, addLaunchpad, updateLaunchpad, deleteLaunchpad } = require('../controllers/launchpad')
const { getTokens, getToken, addToken, updateToken, deleteToken } = require('../controllers/token')


// ------------------- HOME ------------------- //
router.get('/', home)

// ------------------- LAUNCHPAD ------------------- //
router.get('/launchpads', getLaunchpads)
router.get('/launchpad/:id', getLaunchpad)
router.post('/launchpad', addLaunchpad)
router.patch('/launchpad/:id', updateLaunchpad)
router.delete('/launchpad/:id', deleteLaunchpad)

// ------------------- LAUNCHPAD ------------------- //
router.get('/tokens', getTokens)
router.get('/token/:id', getToken)
router.post('/token', addToken)
router.patch('/token/:id', updateToken)
router.delete('/token/:id', deleteToken)

module.exports = router