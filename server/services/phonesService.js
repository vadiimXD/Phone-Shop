const Phone = require("../models/Phone")
const User = require("../models/User")

exports.createOffer = async (body) => {
    await Phone.create(body)
    const product = await Phone.findOne({ name: body.name })
    await User.findByIdAndUpdate(body.owner, { $push: { createdOffers: product._id } })
    return product
}

exports.getAllPhones = () => { return Phone.find() }

exports.updateProduct = (productId, body) => { return Phone.findByIdAndUpdate(productId, body, { runValidators: true }) }

exports.getOneProduct = (productId) => { return Phone.findById(productId) }

exports.buyProduct = async (productId, userId) => {
    await User.findByIdAndUpdate(userId, { $push: { boughtList: productId } })
    const phone = await Phone.findById(productId);
    phone.boughtFrom = userId;
      await Phone.findByIdAndUpdate(productId, phone)
}
