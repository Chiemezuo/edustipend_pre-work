const express = require('express')
const axios = require('axios')
const commentsRouter = require('./routers/comments')
const postRouter = require('./routers/posts')

const app = express()

app.use('/api/posts', postRouter)
app.use('/api/comments', commentsRouter)

app.get('/', (req, res) => {
  res.send('Welcome aboard, please modify the URL as stated in the README.md file')
})

app.get('*', (req, res) => {
  res.send('Oops, I think you mistyped your URL. Double check what you typed.')
})

module.exports = app