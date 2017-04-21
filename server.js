var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var moment = require('moment');

//sets folder to be used for static elements /sets homepage
app.use(express.static(path.join(__dirname, '/public')));

// app.all('*', function(req, res, next) {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     next();
// });

//does stuff with the added strings
app.get('/:str', function(req, res) {
    //captured parameter
    var str = req.params.str;
    var finalDate = {
        "unix" : null,
        "natural" : null
    }
    if(Number(str) >= 0) {
        finalDate.unix = Number(str);
        finalDate.natural = moment.unix(Number(date)).format("MMMM D, YYYY")
    }
    if(isNaN(Number(str)) && moment(str, "MMM D, YYYY").isValid()) {
        finalDate.unix = moment(str, "MMMM D, YYYY").format("X");
        finalDate.natural = str;
    }
    res.send(finalDate);
    //res.send({ 'unix': unix + 'natural:'+ natural  });
    console.log(str);
    
    // var date = new Date().toLocaleDateString();
    // res.send(date);


});
//checks to see if the string is a date
function check(date){

}

//converts the string
function convert(date) {} 
//creates server and set it to listen
http.createServer(app);
//var port = process.env.PORT ||'3000';
//app.set('port', port)
app.listen(3000, function(){
    console.log("server is running at localhost: ${port}")
});
