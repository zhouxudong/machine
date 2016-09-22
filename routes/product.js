var express = require("express");
var router = express.Router();

var product_module = require("../module/product");
var category_module = require("../module/category");
var getCategoryList = category_module.getCategoryList;
var getProductById = product_module.getProductById;

router.get("/:id", (req, res, next) => {

    var id = req.params.id;
    Promise.all([
        getCategoryList(0),
        getProductById(id)
    ]).then(function(callbacks){
        var response_data = {};
        response_data['title'] = "Best CHINA machine";
        response_data["categorys"] = callbacks[0];
        response_data["product"] = callbacks[1];
        response_data["lg"] = "en";
        res.render("product",response_data);
    }).catch(function(){
        res.json({error_msg:arguments})
    })
})
module.exports = router;