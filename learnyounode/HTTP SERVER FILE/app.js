var http = require('http'),
    fs = require('fs'),
    port = +process.argv[2],
    fileLocation = process.argv[3];

http.createServer(function(req, res) {
    res.writeHead(200);

    var fileStream = fs.createReadStream(fileLocation);

    fileStream.pipe(res);
}).listen(port);
