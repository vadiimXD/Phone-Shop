const router = require("express").Router();

const electronicsService = require("../services/phonesService");
const { getErrorMessage } = require("../utils/errorUtils");


router.post("/create", async (req, res) => {
    console.log(req.body)
    try {
        electronicsService.createProduct(req.body)
        res.send({ created: true })
    } catch (error) {
        res.send({ created: false })
    }
})



module.exports = router