var net = require('net'),
    strftime = require('strftime'),
    port = +process.argv[2];

net.createServer(function(socket) {
    var now = new Date();

    socket.end(strftime('%F %H:%M',now) + '\n');
}).listen(port);

