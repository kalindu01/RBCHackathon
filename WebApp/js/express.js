var express = require('express');
var fs = require("fs");
var readline = require('readline');

var app = express();

var path = __dirname.slice(0, -3);

app.get('/get_investments', function (req, res) {

var jsonString  = "";
var finalJason = {};
var jasonsList = [];

  fs.readFileSync(path + "/python/investment_request.csv").toString().split("\n").forEach(function(line) {

  if(line != "") {
    var current_row = line.split("|");
    var row_in_json = {};

    row_in_json["date"] = current_row[0];
    row_in_json["name"] = current_row[1];
    row_in_json["amount"] = current_row[2];
    row_in_json["percent"] = current_row[3];
    
    jasonsList.push(row_in_json);
  }

});
    
//jsonString = jsonString.slice(0, -1);
//console.log(jsonString)  
finalJason["records"] = jasonsList;
res.send(JSON.stringify(finalJason));
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});