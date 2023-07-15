/**
 * This will hold the schema for the user.
 * It explains the different fields of use and how it will be stored in the mongodb
 */

const mongoose = require('mongoose') // require function is used to add module

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    userId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: true,
        lowercase: true
    },
    userType: {
        type: String,
        required: true,
        default: "CUSTOMER",
        enum: ["CUTOMER", "ADMIN"] 
    }
}, {timestamps: true});

/**
 * Define the collection name where it will be stored
 */

module.exports = mongoose.model("User", userSchema)