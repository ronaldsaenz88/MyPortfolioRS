var express = require('express');
var router = express.Router();

/* GET Contact Page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: "My Portfolio - Ronald Saenz | Contact Page" });
});

module.exports = router;
