var express = require('express');
var router = express.Router();
var product_module = require("../module/product");
var category_module = require("../module/category");

var getALLCategorys = category_module.getALLCategorys;
var getCategorySubs = category_module.getCategorySubs;
var getCategoryList = category_module.getCategoryList;
var getProductsByCategoryId = product_module.getProductsByCategoryId;

var getIndexResponse = function (res,language){
  getALLCategorys()
      .then(function(resolveObj){

        var categorys = resolveObj.data;
        Promise.all([
          getCategoryList(0),
          getProductsByCategoryId(2)
        ]).then(function(callbacks){
          var response_data = {};
          response_data['title'] = "Best CHINA machine";
          response_data["categorys"] = callbacks[0];
          response_data["products"] = callbacks[1];
          response_data["lg"] = language;
          res.render("index",response_data);
        })

      }).catch(function(){
    res.json({error_code:123})
  })
}
router.get('/', function(req, res, next) {
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

module.exports = router;
