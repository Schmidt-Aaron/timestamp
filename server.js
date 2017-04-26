var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var moment = require('moment');

//sets folder to be used for static elements /sets homepage
app.use(express.static(path.join(__dirname, '/public')));

//does stuff with the added strings
app.get('/:str', function(req, res) {
    //captured parameter
    var str = req.params.str;
    var finalDate = {
        "unix" : null,
        "natural" : null
    }
    //our date check and conversion using moment.js
    //deals with unix 
    if(Number(str) >= 0) {
        finalDate.unix = Number(str);
        finalDate.natural = moment.unix(Number(str)).format("MMMM D, YYYY")
    }
    //deals with natural dates
    if(isNaN(Number(str)) && moment(str, "MMM D, YYYY").isValid()) {
        finalDate.unix = moment(str, "MMMM D, YYYY").format("X");
        finalDate.natural = str;
    }

    res.send(finalDate);

});

//creates server and set it to listen
http.createServer(app);
var port = process.env.PORT ||'3000';
app.set('port', port);
app.listen(port, function(){
    console.log("server is running at localhost: ${port}")
});
