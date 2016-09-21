var conn = require("./dbconn");
var category_module = require("./category");

var getCategorySubs = category_module.getCategorySubs;

var getProductById = function(product_id){
    var sql = `select * from product where id = ${product_id}`;

    return new Promise( (resolve, reject) => {
        conn(sql, rows => {
            resolve(rows[0]);
        })
    })
}

var getProductsByCategoryId = function(category_id){

    return new Promise((resolve, reject) => {
        getCategorySubs(category_id)
            .then(function(categoryArr){
                var categorys = categoryArr.data;
                var sql = `select * from product where pid in (${categorys})`;
                console.log(sql);
                conn(sql, rows => {
                    resolve(rows);
                })
            })
    })

}

module.exports = {
    getProductById,
    getProductsByCategoryId
}