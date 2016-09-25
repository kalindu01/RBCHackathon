var express = require('express');
var fs = require("fs");
var readline = require('readline');

var app = express();

var path = __dirname.slice(0, -3);

app.get('/', function (req, res) {
    //console.log(__dirname.slice(0. -3) + "/index.html");
   res.sendFile(path + "/index.html");
})

app.get('/get_investments', function (req, res) {

var jsonString  = "";
var finalJason = {};
var jasonsList = [];
  console.log(path);
  fs.readFileSync(path + "/python/investment_request.csv").toString().split("\n").forEach(function(line) {

  if(line != "") {
    var current_row = line.split("|");
    var row_in_json = {};

    row_in_json["date"] = current_row[0];
    row_in_json["department"] = current_row[1];
    row_in_json["name"] = current_row[2];
    row_in_json["amount"] = current_row[3];
    row_in_json["percent"] = current_row[4];
    
    jasonsList.push(row_in_json);
  }

});
//jsonString = jsonString.slice(0, -1);
//console.log(jsonString)  
finalJason["records"] = jasonsList;
res.send(JSON.stringify(finalJason));
});

app.get('/get_more_info', function (req, res) {
    var companyName = req.query.name;
    fs.readFileSync(path + "/python/business_profile.csv").toString().split("\n").forEach(function(line) {
    var jsonRow = {};
    
    var finalJason2 = {};
    var finalList = [];


  if(line != "") {
    var current_row = line.split("|");
    var rowName = current_row[0];
    
    if (rowName === companyName) {
        jsonRow["name"] = rowName;
        jsonRow["field"] = current_row[1];
        jsonRow["url_pic"] = current_row[2];
        jsonRow["phone_number"] = current_row[3];
        jsonRow["description"] = current_row[4];
        jsonRow["revenue"] = current_row[5];
        jsonRow["revenue_growth"] = current_row[6];
        jsonRow["number_of_employees"] = current_row[7];
        jsonRow["address"] = current_row[8];
        //break;
        finalList.push(jsonRow);
        finalJason2["records"] = finalList;

        res.send(JSON.stringify(finalJason2));

    }   
    
  }
  console.log(JSON.stringify(finalJason2));
})
});



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

});