const { Router } = require('express')
const { getNews, postNews, putNews, deleteNews } = require('../controllers/news.controllers')

const router = Router()

router.get('/news', getNews)
router.post('/news', postNews)
router.put('/news/:news_id', putNews)
router.delete('/news/:news_id', deleteNews)

module.exports = router