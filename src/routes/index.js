const {Router} = require('express')
const router = Router()

const catalogRoutes = require("./songs")
const topRoutes = require("./top")
const searchRoutes = require("./search")
const newRoutes = require("./new")
const updatesRoutes = require("./updates")

router.use("/", catalogRoutes);
router.use("/", topRoutes);
router.use("/", searchRoutes);
router.use("/", newRoutes);
router.use("/", updatesRoutes);

module.exports = router