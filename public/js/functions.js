//put required js here
//document.querySelector('.js').innerHTML ="Js file is linked, hoorah";
var moment = require('moment');

var finalDate = {
        "unix" : null,
        "natural" : null
    }

function getDate(str){
    if(Number(str) >= 0) {
        finalDate.unix = Number(str);
        finalDate.natural = moment.unix(Number(str)).format("MMMM D, YYYY")
    }
    if(isNaN(Number(str)) && moment(str, "MMM D, YYYY").isValid()) {
        finalDate.unix = moment(str, "MMMM D, YYYY").format("X");
        finalDate.natural = str;
    }

    return finalDate;
}
