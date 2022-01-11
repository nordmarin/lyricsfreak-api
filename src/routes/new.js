const {Router} = require('express')
const router = Router()

const controller = require("../controllers/newController")

router.get('/new', controller.list)

module.exports = router