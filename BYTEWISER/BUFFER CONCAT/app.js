var bf = [];

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if(chunk != null) {
    bf.push(chunk);    
  }
})

process.stdin.on('end', function() {
  console.log(Buffer.concat(bf));
});
