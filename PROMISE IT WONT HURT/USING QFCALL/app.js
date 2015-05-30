var q = require('q');

q.fcall(parsePromised).then(null, console.log);

function parsePromised() {
   try {
      return JSON.parse(process.argv[2]);
   } catch(e) {
      throw e;
   }

}
