
parsePromised().then(null, console.log);

function parsePromised() {
   var defer = require('q').defer();

   try {
      defer.resolve(JSON.parse(process.argv[2]));
   } catch(e) {
      defer.reject(e);
   } finally {
      return defer.promise;
   }

}
