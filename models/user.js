/**
 * user.js
 *
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Due Date: Feb 19, 2022
 * Modify Date: Feb 19, 2022
 *
 * @link   user.js
 * @file   This file defines the models to create users in the DB
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

let mongoose = require('mongoose');

// special models to manage the user authentication
const passportLocalMongoose = require("passport-local-mongoose");

// create User Schema
let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    phoneNumber: String,
    oauthId: String,
    oauthProvider: String,
    created: Date
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);