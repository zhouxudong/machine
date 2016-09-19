var conn = require("./dbconn");

var getCategoryList = function(pid){
    console.log(pid);
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

module.exports = {
    getCategoryList: getCategoryList
}