var express = require('express');
var fs = require("fs");
var readline = require('readline');

var app = express();

app.get('/', function (req, res) {
   res.sendFile("../index.html");
})

function list_investments(investments_array) {
   var tag = "<ul>";
   for (var i = 0; i < investments_array.length; i++) {
      tag = tag + "<li>" + JSON.stringify(investments_array[i]) + "</li>";
   }
   tag = tag + "</ul>";

   return tag;
}

app.get('/get_investments', function (req, res) {
   // open hte investments file
   var rd = readline.createInterface({
    input: fs.createReadStream('../python/investment_request.csv'),
    output: process.stdout,
    terminal: false
   });
   
   // create a 2d array for all the arrays
    var investments_array = [];
    
    var jsonString  = "";

   // read one line at a line
   rd.on('line', function(line) {
      //add it to the array
      var current_row = line.split("|");
      var row_in_json = {};

      row_in_json["date"] = current_row[0];
      row_in_json["name"] = current_row[1];
      row_in_json["amount"] = current_row[2];
      row_in_json["percent"] = current_row[3];
      
      console.log(JSON.stringify(row_in_json));

      jsonString += JSON.stringify(row_in_json);
      
   });
   //var tag = list_investments(investments_array);
   //tag = tag + "</ul>";
    console.log(jsonString);
   res.send(jsonString);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})