// A simple webserver. When browser invokes server
// a pre-specified string is displayed on broser.

// Include the http module
var http = require('http');
// create webserver
http.createServer(function(req, res){
    //attach listener on end event of request
    req.on('end', function(){
        // write header(status & content-type) to response
        res.writeHead(200, {Content-Type:'text/plain'});
        //send body(data) and end response
        res.end('Hellow World!');
    });
});
//listen on port 8080
server.listen(8080);
cosole.log('Server is listening on port 8080');
