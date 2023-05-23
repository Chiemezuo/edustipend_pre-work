const commentsRouter = require('express').Router()
const { getComments } = require('../controllers/commentsController')

commentsRouter.get('/', getComments)

module.exports = commentsRouter