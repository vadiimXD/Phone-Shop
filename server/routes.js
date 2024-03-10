const router = require("express").Router();

const authController = require("./controllers/authController")
const phoneController = require("./controllers/phoneController")

router.use(authController)
router.use(phoneController)

module.exports = router