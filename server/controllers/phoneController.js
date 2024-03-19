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
        const product = await phonesService.getOneProduct(req.params.productId).lean().populate("owner").populate("boughtFrom");
        res.json(product)
    } catch (error) {
        res.send(false)
    }
})

router.post("/buy", async (req, res) => {
    try {
        await phonesService.buyProduct(req.body.phoneId, req.body.userId)
        res.send(true)
    } catch (error) {
        res.send(false)
    }
})

router.post("/edit", async (req, res) => {
    try {
        await phonesService.updateProduct(req.body.id, req.body.body)
        res.send({ edited: true })
    } catch (error) {
        res.send(false)
    }
})



module.exports = router