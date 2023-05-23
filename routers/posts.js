const postRouter = require('express').Router()
const { getPosts } = require('../controllers/postsController')

postRouter.get('/', getPosts)

module.exports = postRouter