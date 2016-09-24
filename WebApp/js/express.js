var express = require('express');
var fs = require("fs");
var readline = require('readline');

require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);
});

var app = express();

app.get('/', function (req, res) {
   res.sendFile("/Users/JanaMano/Desktop/RBCHackathon/RBCHackathon/WebApp/index.html");
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
    input: fs.createReadStream('/Users/JanaMano/Desktop/RBCHackathon/RBCHackathon/WebApp/python/investment_request.csv'),
    output: process.stdout,
    terminal: false
   });
   
   // create a 2d array for all the arrays
//   var investments_array = [];
   
    var tag = "<ul>";

   // read one line at a line
   rd.on('line', function(line) {
      //add it to the array
      var current_row = line.split("|");
      //console.log(line);

      tag = tag + "<li>" +"{Date: " + current_row[0] 
        + " Name: " + current_row[1] 
        + " Amount Needed: " + current_row[2]
        + " Percent: " + current_row[3] + "}</li>\n";

      

   //   investments_array.put(JSON.stringify(row_in_json));
      
   });
   //var tag = list_investments(investments_array);
   tag = tag + "</ul>";
   console.log(tag);
   res.send(tag);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})