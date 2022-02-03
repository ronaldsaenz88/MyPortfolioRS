var express = require('express');
var router = express.Router();

/* GET Home Page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "My Portfolio - Ronald Saenz | Home Page" });
});

module.exports = router;
