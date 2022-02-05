/**
 * services.js
 *
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Due Date: Feb 05, 2022
 *
 * @link   services.js
 * @file   This file defines the routes to navigate the page, and included the "Services" Page.
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

var express = require('express');
var router = express.Router();

/* GET Services Page. */
router.get('/', function(req, res, next) {
  res.render('services', { title: "My Portfolio - Ronald Saenz | Services Page" });
});

module.exports = router;
