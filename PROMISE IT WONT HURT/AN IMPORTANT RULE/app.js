var q = require('q');

q
.fcall(function() {
   for(var i = 1; i <= 10; i++) {
      if(i > 5) throwMyGod();

      interate(i);
   }
})
.then(null, console.log);



function throwMyGod() {
   throw new Error('OH NOES');
}

function interate(n) {
   console.log(+n);
   return ++n;
}
