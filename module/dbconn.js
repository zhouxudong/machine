"use strict";
var mysql = require("mysql");

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'machine'
})
connection.connect();

var conn = (sql,callback) => {
    connection.query(sql,(err, rows, fields) => {
        if (err) throw err;
    console.log('The solution is: ', rows[0]);
    callback(rows);
})
}

module.exports = conn;