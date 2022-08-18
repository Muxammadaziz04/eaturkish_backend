const { fetchData } = require('../utils/postgres.js')

const getFoodsModel = async () => {
    try {
        const getFoodsQuery = `
        select * from foods
        `
        return await fetchData(getFoodsQuery)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getFoodsModel
}