var express = require('express');
var router = express.Router();
var product_module = require("../module/product");
var category_module = require("../module/category");
var common_module = require("../module/common")

var getALLCategorys = category_module.getALLCategorys;
var getCategorySubs = category_module.getCategorySubs;
var getCategoryList = category_module.getCategoryList;
var getProductsByCategoryId = product_module.getProductsByCategoryId;

var getIndexResponse = function (res,language){

    Promise.all([
        getCategoryList(0),
        getProductsByCategoryId(2)
    ]).then(function(callbacks){
        var response_data = {};
        response_data['title'] = "Best CHINA machine";
        response_data["categorys"] = callbacks[0];
        response_data["products"] = callbacks[1];
        response_data["lg"] = language;
        //res.cookie('language', language, { domain:".bestchinamachine.net",expires: new Date(Date.now() + 2592000000)});
        res.cookie('language', language, { expires: new Date(Date.now() + 2592000000)});
        res.render("index",response_data);
    }).catch(function(){
        res.json({error_code:123})
    })
}
router.get('/', function(req, res, next) {

    var cookies = common_module.getCookies(req);
    getIndexResponse(res,cookies.language || "en");
});
router.get("/api/get_products", (req, res, next) => {
  var category_id = req.param("category_id");
  getProductsByCategoryId(category_id)
      .then(function(products){
        res.json({response_data: products});
      })
      .catch(function(){
          res.json({error: "request fail"})
      })
})
router.get('/cn', function(req, res, next) {
  getIndexResponse(res,"cn");
});
/* GET home page. */
router.get('/en', function(req, res, next) {
  getIndexResponse(res,"en");
});
/* GET home page. */
router.get('/es', function(req, res, next) {
  getIndexResponse(res,"es");
});
/* GET CONTACT us*/
router.get("/contactus", function(req, res, next){
    var cookies = common_module.getCookies(req);
    getCategoryList(0)
        .then(function(categorys){
            var response_data = {};
            response_data['title'] = "Best CHINA machine";
            response_data["categorys"] = categorys;
            response_data["lg"] = cookies.language;
            res.render("contactus",response_data);
        }).catch(function(){
        res.json({error_code:123})
    })
})
/* GET SERVICE */
router.get("/service", function(req, res, next){
    var cookies = common_module.getCookies(req);
    getCategoryList(0)
    .then(function(categorys){
        var response_data = {};
        response_data['title'] = "Best CHINA machine";
        response_data["categorys"] = categorys;
        response_data["lg"] = cookies.language;
        res.render("service",response_data);
    }).catch(function(){
        res.json({error_code:123})
    })
})
/* GET ABOUT US */
router.get("/aboutus", function(req, res, next){
    var cookies = common_module.getCookies(req);

    Promise.all([
        getCategoryList(0),
        //getProductsByCategoryId(2)
    ]).then(function(callbacks){
        var response_data = {};
        response_data['title'] = "Best CHINA machine";
        response_data["categorys"] = callbacks[0];
        //response_data["products"] = callbacks[1];
        response_data["lg"] = cookies.language;
        res.render("aboutus",response_data);
    }).catch(function(){
        res.json({error_code:123})
    })
})

module.exports = router;
