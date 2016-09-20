var conn = require("./dbconn");
var category_module = require("./category");

var getCategorySubs = category_module.getCategorySubs;

var getCategoryList = function(pid){
    var sql = `select * from category where parent_id = ${pid}`;

    return new Promise((resolve, reject) => {
        try {
            conn(sql, rows => {
                resolve(rows);
            })
        }catch (e){
            reject({error: 123})
        }
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
    getCategoryList,
    getProductsByCategoryId
}