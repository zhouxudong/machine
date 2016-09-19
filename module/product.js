var conn = require("./dbconn");

var getCategoryList = function(pid){
    var sql = `select * from category where pid = ${pid}`;

    return Promise((resolve, reject) => {
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