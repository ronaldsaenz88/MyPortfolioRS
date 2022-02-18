let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let BusinessContact = require('../models/business_contact');

module.exports.displayBusinessContactList = (req, res, next) => {
    BusinessContact.find((err, businessContactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BusinessContactList);
            res.render('business_contact/list', {title: 'My Portfolio - Ronald Saenz | Business Contact List', BusinessContactList: businessContactList});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('business_contact/add', {title: 'My Portfolio - Ronald Saenz | Add Business Contact'})          
}

module.exports.processAddPage = (req, res, next) => {
    let newBusinessContact = BusinessContact({
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "company": req.body.company,
        "email": req.body.email,
        "phone_number": req.body.phone_number,
        "linkedin_url": req.body.linkedin_url
    });

    BusinessContact.create(newBusinessContact, (err, BusinessContact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the Business Contact list
            res.redirect('/business_contact_list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    BusinessContact.findById(id, (err, businessContactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business_contact/edit', {title: 'My Portfolio - Ronald Saenz | Edit Business Contact', businessContact: businessContactToEdit})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBusinessContact = BusinessContact({
        "_id": id,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "company": req.body.company,
        "email": req.body.email,
        "phone_number": req.body.phone_number,
        "linkedin_url": req.body.linkedin_url
    });

    BusinessContact.updateOne({_id: id}, updatedBusinessContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the Business Contact list
            res.redirect('/business_contact_list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    BusinessContact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the Business Contact list
             res.redirect('/business_contact_list');
        }
    });
}