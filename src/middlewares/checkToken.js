const jwt = require('../utils/jwt.js')

const checkToken = (req, res, next) => {
    try {
        let token = req.headers.token
        if((req.url === '/food' || req.url === '/news') && req.method === 'POST'){
            if(!token) throw new Error(400, 'token yoq')
            token = jwt.verify(token)
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = checkToken