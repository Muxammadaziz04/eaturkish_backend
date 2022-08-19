const { Router } = require('express')
const { getFoods, postFood, deleteFood, putFood } = require('../controllers/foods.controllers')

const router = Router()

router.get('/foods', getFoods)
router.post('/food', postFood)
router.put('/food/:food_id', putFood)
router.delete('/food/:food_id', deleteFood)

module.exports = router