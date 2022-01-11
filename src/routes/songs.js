const {Router} = require('express')
const router = Router()

const controller = require("../controllers/songsController")

router.get('/songs', controller.list)
router.get('/songs/:letter', controller.letter)
router.get('/songs/:letter/:singer', controller.singer)
router.get('/songs/:letter/:singer/:song', controller.song)
router.get('/songs/:letter/:singer/album/:album', controller.album)

module.exports = router