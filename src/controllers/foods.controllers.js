const { getFoodsModel, deleteFoodsModel, postFoodModel, putFoodModel } = require("../models/foods.models");
const { uploadimg } = require("../utils/fireBase");

const getFoods = async (req, res, next) => {
    try {
        const response = await getFoodsModel(req.query)

        if (response.error) return next(response)

        res.status(200).send({
            status: 200,
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

const postFood = async (req, res, next) => {
    try {
        const file = req.files?.img

        if (file?.name && file?.data) {
            const fileName = Date.now() + file?.name
            const path = `foods/${fileName}`
            req.body.food_img = await uploadimg(file, path, res)
        } else {
            req.body.food_img = ''
        }
        
        const response = await postFoodModel(req.body)

        if (response.error || !response.length) return next(response)

        res.status(201).send({
            status: 201,
            message: 'successful created',
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

const putFood = async (req, res, next) => {
    try {
        const file = req.files?.img

        if (file?.name && file?.data) {
            const fileName = Date.now() + file?.name
            const path = `food/${fileName}`
            req.body.food_img = await uploadimg(file, path, res)
        }

        const response = await putFoodModel(req.body, req.params)

        if (response.error || !response.length) return next(response)

        res.status(201).send({
            status: 201,
            message: 'successful updated',
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteFood = async (req, res, next) => {
    try {
        const response = await deleteFoodsModel(req.params)

        if (response.error || !response.length) return next(response)

        res.status(203).send({
            status: 203,
            message: 'successful deleted',
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getFoods,
    postFood,
    putFood,
    deleteFood
}