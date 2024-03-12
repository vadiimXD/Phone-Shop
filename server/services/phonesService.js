const Phone = require("../models/Phone")

exports.createOffer = (body) => { return Phone.create(body) }

exports.getAllPhones = () => { return Phone.find() }