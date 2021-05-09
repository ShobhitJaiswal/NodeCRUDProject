var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "neha",
  database: "mydata"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a table named "customers":*/
  var sql = "CREATE TABLE customers ( name, email ,mobile , password , confirm_password))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});