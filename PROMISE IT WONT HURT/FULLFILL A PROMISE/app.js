var q = require('q'),
    defer = q.defer();

setTimeout(defer.resolve, 300, 'RESOLVED!');

defer.promise.then(console.log);
