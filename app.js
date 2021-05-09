const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "neha",
    database: "mydata"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //Insert a record in the "customers" table:
});


const server = http.createServer((req, res) => {
    res.statuscode = 200;
    res.setHeader('content-type', 'text/html');
    console.log(req.url)

    if (req.url == '/') {
        fs.readFile("./main_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
    }
	else if(req.url == '/Add_Buying_Product'){
		fs.readFile("./Add_Buying_Product_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}	
	
		else if(req.url == '/main'){
		fs.readFile("./main_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}
	else if(req.url == '/Add_Selling_Product'){
		fs.readFile("./Add_Selling_Product_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}	
		else if(req.url == '/After_Login'){
		fs.readFile("./After_Login_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}
		else if(req.url == '/Delete_Buying_Product'){
		fs.readFile("./Delete_Buying_Product_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}	
		else if(req.url == '/popup'){
		fs.readFile("./popuplogin.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}
		else if(req.url == '/Delete_Order'){
		fs.readFile("./Delete_Order_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}	
		else if(req.url == '/Delete_Selling_Product'){
		fs.readFile("./Delete_Selling_Product_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}
		else if(req.url == '/Edit_Order'){
		fs.readFile("./Edit_Order_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}
		else if(req.url == '/Login_Fail'){
		fs.readFile("./Login_Fail_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}
	else if(req.url == '/Manange_User'){
		fs.readFile("./Manange_User_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}
	else if(req.url == '/Order'){
		fs.readFile("./Order_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}
	else if(req.url == '/Placed_Order_History'){
		fs.readFile("./Placed_Order_History_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}
		else if(req.url == '/Placed_Order_Intimation'){
		fs.readFile("./Placed_Order_Intimation_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}
		else if(req.url == '/Received_Order_History'){
		fs.readFile("./Received_Order_History_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}
		else if(req.url == '/Received_Order_Intimation'){
		fs.readFile("./Received_Order_Intimation_page.html", "UTF-8", function(err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
	}
	else if (req.url == '/Register_page') {
        //console.log(req)
        //res.end(req);

        if (req.method == 'POST') {
            var jsonString = '';

            req.on('data', function(data) {
                jsonString += data;
            });
            req.on('end', function() {

                //var data = JSON.parse(jsonString);
                var querystring = require('querystring');
                var data = querystring.parse(jsonString);
                var sql = "INSERT INTO customers (name, email, password,mobile, confirm_password) VALUES (?,?,?,?,?)";
                con.query(sql, [data.name, data.email, data.password, data.mobile, data.confirm_password], function(err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                });

                res.end('Data saved!')
            });
        }
		else{
			fs.readFile("./Register_page.html", "UTF-8", function(err, html) {
				res.writeHead(200, {
					"Content-Type": "text/html"
				});
				res.end(html);
			});
		}
    } else if (req.url == '/Login_page') {
        //console.log(req)
        //res.end(req);

        if (req.method == 'POST') {
            var jsonString = '';

            req.on('data', function(data) {
                jsonString += data;
            });

            req.on('end', function() {

                //var data = JSON.parse(jsonString);
                var querystring = require('querystring');
                var data = querystring.parse(jsonString);
                var sql = "select * from customers where email = ? and password = ?";
                con.query(sql, [data.email, data.password], function(err, result) {
                    if (err) throw err;
                    if (result.length) {
                        res.end("You are logged in.")

                    } else {
						//var querystring = require('querystring');
						 //var data = querystring.parse(jsonString);
                var sql = "select * from customers where mobile = ? and password = ?";
                con.query(sql, [data.email, data.password], function(err, result) {
                    if (err) throw err;
                    if (result.length) {
                        res.end("You are logged in.");
					}else{
						//alert(sql + "  " + data.password);
                        res.end("Invalid id password." + sql + "  " + data.email + " " + data.password);
                    }
                });

					}   //res.end('internal server error')
            });
        });
		}else{
			fs.readFile("./Login_page.html", "UTF-8", function(err, html) {
				res.writeHead(200, {
					"Content-Type": "text/html"
				});
				res.end(html);
			});
		}
    }else {
        try {
            //checking for static files
            if (req.url.match("\.js$")) {
                var jsPath = path.join(__dirname, 'static', 'js', req.url);
				if (!fs.existsSync(jsPath)) {
					throw "not found"; 
				}
                var fileStream = fs.createReadStream(jsPath, "UTF-8");
                res.writeHead(200, {
                    "Content-Type": "text/javascript"
                });
                fileStream.pipe(res);

            } else if (req.url.match("\.css$")) {
                var cssPath = path.join(__dirname, 'static', 'css', req.url);
				if (!fs.existsSync(cssPath)) {
					throw "not found"; 
				}
                var fileStream = fs.createReadStream(cssPath, "UTF-8");
                res.writeHead(200, {
                    "Content-Type": "text/css"
                });
                fileStream.pipe(res);

            } else if (req.url.match("\.png$")) {
                var imagePath = path.join(__dirname, 'static', 'images', req.url);
				if (!fs.existsSync(imagePath)) {
					throw "not found"; 
				}
                var fileStream = fs.createReadStream(imagePath);
				
                res.writeHead(200, {
                    "Content-Type": "image/png"
                });
                fileStream.pipe(res);
            } else {
                res.writeHead(404, {
                    "Content-Type": "text/html"
                });
                res.end("No Page Found");
            }
        } catch(err) {
            res.writeHead(404, {
                "Content-Type": "text/html"
            });
            res.end("No Page Found");
        }

    }


});
server.listen(port, hostname, () => {
    console.log('server started on port ' + port);
});