const express = require("express")
const morgan = require("morgan")

const port = 3000
const app = express()

app.use(morgan('dev'))
app.use(require("./routes/index"))

module.exports = { app, port }