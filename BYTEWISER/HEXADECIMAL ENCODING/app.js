var numbers = process.argv.slice(2).map(function (el) { return +el; }) ;
    bf = new Buffer(numbers);

console.log(bf.toString('hex'));
