const { Router } = require('express')
const { getCategories } = require('../controllers/categories.controllers')

const router = Router()

router.get('/categories', getCategories)

module.exports = router