const UserController = require('../controllers/usercontroller')
const { authentication } = require('../middlewares/auth')
const FetchController = require('../controllers/fetchcontroller')
const router = require('express').Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/news', FetchController.fetchNews)

router.use(authentication)

// add, edit, delete

module.exports = router