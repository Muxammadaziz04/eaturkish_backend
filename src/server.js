const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const validation = require('./middlewares/validation.js')
const checkToken = require('./middlewares/checkToken.js')

const categoryRouter = require('./routers/categories.routers.js')
const subscriberRouter = require('./routers/subscribers.routers.js')
const messagesRouter = require('./routers/messages.routers.js')
const newsRouter = require('./routers/news.routers.js')
const foodsRouter = require('./routers/foods.routers.js')
const votesRouter = require('./routers/votes.routers.js')
const loginRouter = require('./routers/login.router.js')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(validation)
app.use(checkToken)

app.use(categoryRouter)
app.use(subscriberRouter)
app.use(messagesRouter)
app.use(newsRouter)
app.use(foodsRouter)
app.use(votesRouter)
app.use(loginRouter)

app.use((error, req, res, next) => {
    return res.send({ error: error.error?.message || error.message || "somethink went wrong" })
})

app.listen(PORT, () => console.log(`Server run on ${PORT} port`))