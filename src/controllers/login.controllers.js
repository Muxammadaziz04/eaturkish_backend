const { loginModel } = require("../models/login.models");
const jwt = require('../utils/jwt')


const login = async (req, res, next) => {
    try {
        const response = await loginModel(req.body)

        if(response.error || !response.length) return next(response)

        res.status(201).send({
            status: 201,
            message: 'successful login',
            token: jwt.sign(response[0].user_id)
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    login
}