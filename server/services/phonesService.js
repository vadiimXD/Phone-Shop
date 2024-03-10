const Phone = require("../models/Phone")

exports.createProduct = (body) => { return Phone.create(body) }

