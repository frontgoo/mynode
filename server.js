var http = require('http');
http.createServer(function(res,rep){
	rep.writeHead(200,{'content-type':'text/plain'});
	rep.end('hi,node!');
}).listen(8888);
console.log('server is running at localhost port 8888...');
