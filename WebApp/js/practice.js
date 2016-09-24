console.log("Hello, world!");
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});
// // get the required modules
// var http = require("http");
// http.createServer(function(request, response) {
// 	response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(3000, '0.0.0.0', function() {
//     console.log('Listening to port:  ' + 3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

// import
var events = require("events");
// create the emitter
var eventEmitter = new events.EventEmitter();

// this is the event handler, when someone calls Sakshaat (event) this is what happens
var callSakshaat = function() {
	console.log("Hi I'm Sakshaat, \n Kalindu what're you sayin");
	// now he will call Kali
	console.log("Kalindu:");

	eventEmitter.emit("Kali what're you sayin");
};

var KalinduSays = function() {
	console.log("Nothing much, man");
};

// bind the event with the handler
console.log("Sakshaat:");
eventEmitter.on('Hey Sakshaat', callSakshaat);
eventEmitter.on("Kali what're you sayin", KalinduSays);

// make the event happen
eventEmitter.emit('Hey Sakshaat');
console.log("DONE!");
