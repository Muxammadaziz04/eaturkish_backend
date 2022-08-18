const { Router } = require('express')
const { getCategories, postCategories, deleteCategories } = require('../controllers/categories.controllers')

const router = Router()

router.get('/categories', getCategories)
router.post('/category', postCategories)
router.delete('/category/:category_id', deleteCategories)

module.exports = router