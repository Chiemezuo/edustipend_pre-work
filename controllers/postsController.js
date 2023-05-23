const axios = require('axios')

const getPosts = async (req, res) => {
  const limit = req.query.limit

  const output = await axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
    params: {
      _limit: limit
    }
  })

  res.json(output.data)
}

module.exports = {
  getPosts
}