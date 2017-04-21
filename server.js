var express = require('express');
var app = express();
var path = require('path');
var http = require('http');

//sets folder to be used for static elements /sets homepage
app.use(express.static(path.join(__dirname, '/public')));

app.all('*', function(req, res, next) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    next();
});

//does stuff with the added strings
app.get('/:str', function(req, res) {
    //captured parameter
    var str = req.params.str;
    res.send('string:' + str + '\n');
    //res.send({ 'unix': unix + 'natural:'+ natural  });
    console.log(str);
    
    // var date = new Date().toLocaleDateString();
    // res.send(date);


});
//checks to see if the string is a date
function check(date){

}

//converts the string
function convert(date); 

//inits server at port 3000
http.createServer(app).listen(3000, function(){
    console.log("server is running at 3000 port")
});
