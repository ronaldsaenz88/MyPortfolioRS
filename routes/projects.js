/**
 * projects.js
 *
 * Student Name: Ronald Saenz
 * Student Id: 301218602
 * Due Date: Feb 05, 2022
 *
 * @link   projects.js
 * @file   This file defines the routes to navigate the page, and included the "Projects" Page.
 * @author Ronald Saenz <rsaenzh@my.centennialcollege.ca>
 * @since  1.0.0
 */

var express = require('express');
var router = express.Router();

/* GET Projects Page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: "My Portfolio - Ronald Saenz | Projects Page" });
});

module.exports = router;
