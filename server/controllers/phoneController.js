const router = require("express").Router();

const phonesService = require("../services/phonesService");
const { getErrorMessage } = require("../utils/errorUtils");


router.post("/create", async (req, res) => {
    console.log(req.body)
    try {
        await phonesService.createOffer(req.body)
        res.send({ created: true })
    } catch (error) {
        res.send(false)
    }
})


router.get("/catalog", async (req, res) => {
    try {
        const phones = await phonesService.getAllPhones().lean().populate("owner")
        res.json(phones)
    } catch (error) {
        res.send(false)
    }
})

router.get("/details/:productId", async (req, res) => {
    try {
        const product = await phonesService.getOneProduct(req.params.productId).lean();
        res.json(product)
    } catch (error) {
        res.send(false)
    }
})




module.exports = router