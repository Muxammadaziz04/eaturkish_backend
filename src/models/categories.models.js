const { fetchData } = require('../utils/postgres.js')

const getCategoriesModel = async () => {
    try {
        const getCategoriesQuery = `
        select * from categories
        `
        return await fetchData(getCategoriesQuery)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCategoriesModel
}