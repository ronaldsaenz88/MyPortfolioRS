var express = require('express');
var router = express.Router();

/* GET About Me Page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: "My Portfolio - Ronald Saenz | About Me Page" });
});

module.exports = router;
