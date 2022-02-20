/**
 * contact.js
 *
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Due Date: Feb 05, 2022
 * Modify Date: Feb 19, 2022
 *
 * @link   contact.js
 * @file   This file defines the routes to navigate the page, and included the "Contact" Page.
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

var express = require('express');
var router = express.Router();

/* GET Contact Page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: "My Portfolio - Ronald Saenz | Contact Page", user: req.user });
});

module.exports = router;
