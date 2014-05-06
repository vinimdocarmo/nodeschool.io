var http = require('http'),
    through = require('through'),
    tr = through(function(buf) {
      this.queue(buf.toString().toUpperCase());
    });

http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(tr).pipe(res);      
  }
  else res.end('beep boop\n');
}).listen(+process.argv[2]);

