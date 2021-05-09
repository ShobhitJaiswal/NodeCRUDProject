var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "neha",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a database named "mydata":*/
  con.query("CREATE DATABASE mydata", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});