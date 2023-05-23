const axios = require('axios')

const getComments = async (req, res) => {
  const limit = req.query.limit

  const output = await axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/comments",
    params: {
      _limit: limit
    }
  })

  res.json(output.data)
}

module.exports = {
  getComments
}