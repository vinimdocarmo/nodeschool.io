//solutions with bonus and super bonus!
var q = require('q'),
    defer1 = q.defer(),
    defer2 = q.defer();

setTimeout(function(arr) {
   defer1.resolve('PROMISES');
   defer2.resolve('FTW');
}, 200);

q.all([defer1.promise, defer2.promise])
 .spread(function(val1, val2) {
    console.log([val1, val2]);
 });
