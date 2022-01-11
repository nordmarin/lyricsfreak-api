const {Router} = require('express')
const router = Router()

const controller = require("../controllers/searchController")

router.get('/search/:song', controller.search)

module.exports = router