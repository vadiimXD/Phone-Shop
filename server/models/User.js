const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    },
    shoppingCart: [{
        type: mongoose.Types.ObjectId,
        ref: "Phone"
    }],
    boughtList: [{
        type: mongoose.Types.ObjectId,
        ref: "Phone"
    }],
    createdOffers: [{
        type: mongoose.Types.ObjectId,
        ref: "Phone"
    }],
})

const User = mongoose.model("User", userSchema)

module.exports = User;