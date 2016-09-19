var express = require('express');
var router = express.Router();
var product_module = require("../module/product")

var getCategoryList = product_module.getCategoryList;

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });

});

module.exports = router;
