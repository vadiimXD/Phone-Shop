const router = require("express").Router();

const authController = require("./controllers/authController")

// router.get("/", (req, res) => {
//     res.json({
//         message: "Hello from my server"
//     })
// })

router.use(authController)

module.exports = router