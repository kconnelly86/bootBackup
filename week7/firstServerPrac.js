var http = require("http");
var PORT = 8080;

function handleRequest(request,response) {
	response.end("it works Path hit: " + request.url);

}
 var server = http.createServer(handleRequest);
 server.listen(PORT, function(){
 	console.log("server listening on: http://localhost: " + PORT);
 });