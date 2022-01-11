const {Router} = require('express')
const router = Router()

const controller = require("../controllers/updatesController")

router.get('/updates', controller.list)

module.exports = router