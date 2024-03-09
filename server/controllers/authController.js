const router = require("express").Router();
const authService = require("../services/authService")
const { getErrorMessage } = require("../utils/errorUtils");

router.post("/register", async (req, res) => {
    console.log(req.body)
    try {
        const body = await authService.registerUser(req.body.email, req.body.password, req.body)
        res.send(body)
    } catch (error) {

        res.send(false)

    }
})


router.post("/login", async (req, res) => {
    try {
        const body = await authService.loginUser(req.body);
        res.send(body)
    } catch (error) {
        res.send(false)
    }
})


module.exports = router