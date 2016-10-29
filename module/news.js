var conn = require("./dbconn");
var moment = require("moment");

var getNewsList = function(){
    var sql = "select * from news_info where status = 1";

    return new Promise( (resolve,reject) => {
        try {
            conn(sql, rows => {
                var datas = [];
                rows.forEach( (row,i) => {
                    row['ctime'] = moment(row.ctime).format("YYYY-MM-DD HH:mm:ss");
                    console.log(row);
                    datas.push(row);
                })
                resolve(datas);
            })
        }catch (e){
            reject(e);
        }
    })
}

var getNewsInfo = function(id){
    var sql = `select * from news_info where id = ${id}`;

    return new Promise( (resolve,reject) => {
        try {
            conn(sql, rows => {
                resolve(rows[0]);
            })
        }catch (e){
            reject(e);
        }
    })
}

module.exports = {
    getNewsList,
    getNewsInfo
}