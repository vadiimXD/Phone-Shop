const mongoose = require("mongoose")

const PhoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    type: {
        type: String,
        required: true,
        minLength: 2,
    },
    damages: {
        type: String,
        minLength: 4,
    },
    image: {
        type: String,
        required: true,
        match: [/^https?:\/\//, "invalid url"],
    },
    description: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 200,
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2025
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    shoppingCart: [{
        type: mongoose.Types.ObjectId,
        ref: "Phone"
    }],
    boughtFrom: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})


const Phone = mongoose.model("Phone", PhoneSchema)

module.exports = Phone;
