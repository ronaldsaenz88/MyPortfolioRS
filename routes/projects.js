var express = require('express');
var router = express.Router();

/* GET Projects Page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: "My Portfolio - Ronald Saenz | Projects Page" });
});

module.exports = router;
