var express = require('express');
var router = express.Router();
var product_module = require("../module/product")

var getCategoryList = product_module.getCategoryList;

router.get('/', function(req, res, next) {

  getCategoryList(0).then(function(){
    var response_data = {};
    response_data['title'] = "Best CHINA machine";
    response_data["categorys"] = arguments[0];
    response_data["lg"] = "cn";
    res.render('index', response_data);
  })


});
/* GET home page. */
router.get('/en', function(req, res, next) {

  getCategoryList(0).then(function(){
    var response_data = {};
    response_data['title'] = "Best CHINA machine";
    response_data["categorys"] = arguments[0];
    response_data["lg"] = "en";
    res.render('index', response_data);
  })


});
/* GET home page. */
router.get('/es', function(req, res, next) {

  getCategoryList(0).then(function(){
    var response_data = {};
    response_data['title'] = "Best CHINA machine";
    response_data["categorys"] = arguments[0];
    response_data["lg"] = "es";
    res.render('index', response_data);
  })


});

module.exports = router;
