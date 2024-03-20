const router = require("express").Router();
const authService = require("../services/authService")
const { getErrorMessage } = require("../utils/errorUtils");

router.post("/register", async (req, res) => {
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

router.get("/user/:userId", async (req, res) => {
    try {
        const user = await authService.getUserById(req.params.userId).populate("shoppingCart").populate("createdOffers").populate("boughtList");
        res.json(user)
    } catch (error) {
        res.send(false)
    }
})


module.exports = router