const { Router } = require('express')
const { vote } = require('../controllers/votes.controllers')

const router = Router()

router.post('/vote/:food_id', vote)

module.exports = router