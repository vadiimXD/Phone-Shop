const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    profileImg: {
        type: String,
        trim: true,
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