const { verify } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = async (req, res, next) => {
  const token = req.headers.access_token
  try {
    const userData = verify(token)
    const id = userData.id
    const foundUser = await User.findByPk(id)
    if(!foundUser) {
      res.status(401).json({message: 'Authentication failed'})
    } else {
      req.user = {
        id: foundUser.id,
        email: foundUser.email,
      }
      next()
    }
  } catch (error) {
    res.status(500).json({message: 'Internal server error'})
  }
}

module.exports = { authentication }