var http = require('http'),
    map = require('through2-map'),
    port = +process.argv[2];

http.createServer(function(req, res) {
    if(req.method !== 'POST')
        return res.end('Provide a POST request');

    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
}).listen(port);
