const express = require('express')
const axios = require('axios')
const commentsRouter = require('./routers/comments')
const postRouter = require('./routers/posts')

const app = express()

app.use('/api/posts', postRouter)
app.use('/api/comments', commentsRouter)

module.exports = app