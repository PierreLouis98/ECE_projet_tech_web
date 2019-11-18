Hello world with node.js  : SORY Anas and Pierre-Louis de Soultrait


var http = require('http')  : to use HTTP server and client must require ('http")
http.createServer(requestlistner) :  create an http server object 
function(req, res) : a function that is called every time the server gets a request 
                     handles requests from the user , and also the response 
res.writeHead(200, {"Content-Type": "text/plain"}): first argument contains status code 200 which means isOK                                                     second argument is an object containing the response header
 res.end() : finishes sending the request to the server 
 listen(8080) : start a server listening for finding a connection 
                                            