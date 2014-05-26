require('fs').readFile(process.argv[2], function(err, data) {
  if(err) throw err;
  var offset = 0;
  
  for(var i = 0; i < data.length; i++) {
    if(data[i] == '0x0a') {
      console.log(data.slice(offset, i));
      i++;
      offset = i;
    }
  }
  console.log(data.slice(offset, i));
});
