var express = require('express');
var fs = require("fs");
var readline = require('readline');

var app = express();

app.get('/', function (req, res) {
   res.sendFile("/Users/JanaMano/Desktop/RBCHackathon/RBCHackathon/WebApp/index.html");
})

app.get('/expand_investment', function (req, res) {
      index = req.query.clickedIndex{
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
})

app.get('/list_investments', function (req, res) {
   // open hte investments file
   var rd = readline.createInterface({
    input: fs.createReadStream('../investment_request.csv'),
    output: process.stdout,
    terminal: false
   });
   // create a 2d array for all the arrays
   var investments_array = [];
   // read one line at a line
   rd.on('line', function(line) {
      //add it to the array
      var current_row = line.split("|");
      for (var i = 0; i < current_row.length; i++) {
         var row_in_json = {}
         investments_array.push(current_row);
      }
   });
   res.send(investments_array);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})