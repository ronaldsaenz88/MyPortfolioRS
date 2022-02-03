var express = require('express');
var router = express.Router();

/* GET Services Page. */
router.get('/', function(req, res, next) {
  res.render('services', { title: "My Portfolio - Ronald Saenz | Services Page" });
});

module.exports = router;
