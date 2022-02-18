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
