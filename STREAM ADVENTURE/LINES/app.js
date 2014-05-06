var split = require('split'),
    through = require('through'),
    tr = through(write),
    count = 0;

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

function write(buf) {
  buf = buf.toString();
  this.queue(((count%2) === 0 ? buf.toLowerCase() : buf.toUpperCase()) + '\n');
  count++;
}
