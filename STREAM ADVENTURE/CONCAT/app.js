var concat = require('concat-stream');

process.stdin.pipe(concat(function(buffer) {
  var str = buffer.toString().split('').reverse().join('');
  process.stdout.write(str);
}));
