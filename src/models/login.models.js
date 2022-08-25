const { fetchData } = require('../utils/postgres.js')

const loginModel = async ({username, password}) => {
    try {
        const loginQuery = `
        select * from users where username = $1 and password = $2
        `
        return await fetchData(loginQuery, username, password)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    loginModel
}