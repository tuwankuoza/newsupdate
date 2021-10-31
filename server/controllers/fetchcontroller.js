const axios = require('axios')
let { newsApiOrg } = require('../helpers/apiKey')

class FetchController {
  static async fetchNews(req, res, next) {
    let { keywords } = req. query
    if(!keywords) {
      keywords = ''
    }
    try {
      const { data } =  await axios({
        method: 'GET',
        url: `https://newsapi.org/v2/top-headlines?q=${keywords}&country=id&category=business&apiKey=${newsApiOrg()}`,
      })
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({message: 'Internal server error'})
    }
  }
}

module.exports = FetchController