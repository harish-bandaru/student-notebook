require('dotenv').config();
//const mysql = require('mysql2/promise');
const mysql = require('mysql2');
//const con = mysql.createPool({
const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

const query = (sql, binding) => {
  return new Promise((resolve, reject) => {
    con.query(sql, binding, (err, result, fields)=> {
      if(err) reject(err);
      resolve(result);
    })
  })
}

con.connect(function(err){
    if (err) throw err;
    console.log("connected");
    con.query("CREATE DATABASE IF NOT EXISTS student_notes;", function(err, result){
        if (err) throw err;
        console.log("Database student_notes created");
    });

});
module.exports = {con, query};