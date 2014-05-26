process.stdin.on('data', function(bf) {
  for (var i = 0; i < bf.length; i++) {
    if (bf[i] === 0x2e) bf[i] = 0x21
  }
  console.log(bf);
});
