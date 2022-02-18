/**
 * business_contact.js
 *
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Due Date: Feb 19, 2022
 * Modify Date: Feb 18, 2022
 *
 * @link   business_contact.js
 * @file   This file defines the models to create in the DB
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

let mongoose = require('mongoose');

// create a model class
let BusinessContactModel = mongoose.Schema({
    first_name: String,
    last_name: String,
    company: String,
    email: String,
    phone_number: String,
    linkedin_url: String
});

module.exports = mongoose.model('BusinessContact', BusinessContactModel);
