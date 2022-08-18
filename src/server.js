const express = require('express')
const fileUpload = require('express-fileupload')
const categoryRouter = require('./routers/categories.routers.js')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(fileUpload())

app.use(categoryRouter)

app.use((error, req, res, next) => {
    return res.send({ error: error.error?.message || "somethink went wrong" })
})

app.listen(PORT, () => console.log(`Server run on ${PORT} port`))