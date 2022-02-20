/**
 * business_contact.js
 *
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Due Date: Feb 19, 2022
 * Modify Date: Feb 19, 2022
 *
 * @link   business_contact.js
 * @file   This file defines the routes to navigate and do actions (CRUD) with the BusinessContact Model
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// middleware that ensures a user is logged in.
const connectEnsureLogin = require('connect-ensure-login');

// connect to our Business Contact  Model
let BusinessContact = require('../models/business_contact');

let businessContactController = require('../controllers/business_contact');

/* GET Route for the Business Contact List page - READ Operation */
router.get('/', 
    connectEnsureLogin.ensureLoggedIn('/auth/login'),
    businessContactController.displayBusinessContactList
);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', 
    connectEnsureLogin.ensureLoggedIn('/auth/login'),
    businessContactController.displayAddPage
);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add',
    connectEnsureLogin.ensureLoggedIn('/auth/login'), 
    businessContactController.processAddPage
);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id',
    connectEnsureLogin.ensureLoggedIn('/auth/login'),
    businessContactController.displayEditPage
);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id',
    connectEnsureLogin.ensureLoggedIn('/auth/login'),
    businessContactController.processEditPage
);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id',
    connectEnsureLogin.ensureLoggedIn('/auth/login'),
    businessContactController.performDelete
);

module.exports = router;