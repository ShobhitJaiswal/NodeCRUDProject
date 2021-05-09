var express = require('express');
 var app = express();

var movies = [
   {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
   {id: 102, name: "Inception", year: 2010, rating: 8.7},
   {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
   {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
];

 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));

 app.get('/', function (req, res) {
     return res.send({ error: true, message: 'hello' })
 });

 app.get('/data', function (req, res) {
     return res.send({ error: true, message: 'Welcome to PMSL data' })
 });
app.get('/getList',function (req,res){
    return res.send({error:true,message:'getlist'})
});
app.get('/getdata',function(req,res){
    return res.send(movies);
});

 app.listen(3001, function () {
     console.log('Node app is running on port 3001');
 });
 module.exports = app;
