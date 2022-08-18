const { getCategoriesModel } = require("../models/categories.models.js");

const getCategories = async (req, res, next) => {
    try {
        const response = await getCategoriesModel()

        if (response.error) return next(response)

        res.status(201).send({
            status: 200,
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCategories
}