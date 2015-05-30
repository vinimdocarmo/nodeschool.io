var defer = require('q').defer();

defer.resolve('MANHATTAN');
defer.promise.then(attachTitle).then(console.log);

function attachTitle(name) {
   return 'DR. ' + name;
}
