/**
 * business_contact.js
 *
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Due Date: Feb 19, 2022
 * Modify Date: Feb 18, 2022
 *
 * @link   business_contact.js
 * @file   This file defines the routes to navigate and do actions (CRUD) with the BusinessContact Model
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Business Contact  Model
let BusinessContact = require('../models/business_contact');

let businessContactController = require('../controllers/business_contact');

/* GET Route for the Business Contact List page - READ Operation */
router.get('/', businessContactController.displayBusinessContactList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', businessContactController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', businessContactController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', businessContactController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', businessContactController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', businessContactController.performDelete);

module.exports = router;