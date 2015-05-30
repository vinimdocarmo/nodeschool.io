var defer = require('q').defer();

defer.promise.then(null, function(error) {
   console.log(error.message)
});

setTimeout(defer.reject, 300, new Error('REJECTED!'));
