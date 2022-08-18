const { Router } = require('express')
const { postSubscriber } = require('../controllers/subscribers.controllers')

const router = Router()

router.post('/subscriber', postSubscriber)

module.exports = router