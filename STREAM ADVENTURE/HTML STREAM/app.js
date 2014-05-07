var trumpet = require('trumpet'),
    through = require('through'),
    tr = trumpet(),
    th = through(function(buf) {
        var strUp = buf.toString().toUpperCase();
        this.queue(strUp);
    });

tr.pipe(process.stdout);
process.stdin.pipe(tr).select('.loud').createStream().pipe(th).pipe(process.stdout);
