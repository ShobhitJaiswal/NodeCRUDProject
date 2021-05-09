var express   = require('express');
var session    = require('express-session');
var bodyParser = require('body-parser');
var path      = require('path');
var mysql     = require('mysql');
const storage = require('node-sessionstorage');

var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

var array1=[];
var sess='';
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql@shobhit",
    database: "users"
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'static/css')));
app.use(express.static(path.join(__dirname, 'static/js')));

app.get('/', function(request, response) {
    sess = request.session;
    if(sess.email) {
        return response.redirect('/After_Login_page');
    }
	response.sendFile(path.join(__dirname + '/main_page.html'));
});

app.get('/Login_page', function(request, response) {
	 if(sess.email) {
        return response.redirect('/After_Login_page');
    }
	response.sendFile(path.join(__dirname + '/Login_page.html'));
});

app.get('/Login_failed',function(request,response){
response.sendFile(path.join(__dirname + '/Login_Fail_page.html'));
});

app.get('/Register_page', function(request, response) {
	if(sess.email=='') {
        return response.redirect('/');
    }
	response.sendFile(path.join(__dirname + '/Register_page.html'));
});

app.get('/After_Login_page', function(request, response) {
	//console.log("Aa");
	//console.log(sess.email);
	if(sess.email=='' || sess.email==undefined) {
        	return response.redirect('/');
    }
	response.sendFile(path.join(__dirname + '/After_Login_page.html'));
});

app.get('/logout',function(request,response) {
request.session.destroy(function(err){
 if(err)
      console.log(err);
 else{
 sess.email='';
	return response.redirect('/');
   }  
})
});


app.post('/auth', function(request, response) {
 	response.setHeader("Access-Control-Allow-Origin", "*");
	var password = request.body.password;
	var email = request.body.email;
        //console.log(request.body);
        //console.log(username);
        //console.log(password);
	var sql="select * from form where email='"+email+"' and password='"+password+"'";
	con.query(sql, function (err, result) {
	try{
		 var emailu= result[0].email;
	 	 var passu = result[0].password;
 		 var uname = result[0].name;	
          }
	 catch(err)
	  {
		 var emailu='';
	 	 var passu ='';
 		 var uname ='';
	   }	  
		 
	if (email==emailu && passu==password) 
        {
  	  request.session.loggedin = true;
	  request.session.username = email;
	  storage.setItem("ajeet",uname);
	  sess = request.session;
          sess.email = request.body.email;
	  return response.redirect('/After_Login_page');
	  //response.end();
	} else {
		storage.setItem("ajeet","Username or password invalid");
	       return response.redirect('/Login_failed');
 		//response.send('Please enter Username and Password!');
		//response.end();
	}
	});
});
app.post('/data', function(request, response) {	
        response.setHeader("Access-Control-Allow-Origin", "*");
        var name =request.body.name;
	var email =request.body.email;
	var mobile=request.body.mobile;
	var pass=request.body.password;
	console.log(name,email,mobile,pass);
        //con.query("select * from tbl_smsreceived;",function(err,result){
	/*for(var  i = 0 ; i < result.length;i++){
	var rrr={"uid":result[i].uid,"date":result[i].receiveddatetime,"phone":result[i].phoneno};
	array1.push(rrr);
	  
       }*/
	var sql = "INSERT INTO form (`uuid`,`name`,`email`,`mobile`,`password`) VALUES (uuid(),'"+name+"','"+email+"','"+mobile+"','"+pass+"')";  
	con.query(sql, function (err, result) {  
	if (err) throw err;  
	console.log("1 record inserted");  
//});  


   });
//response.send(array1); 
return response.redirect('/Login_page');
});
app.listen(5000);
