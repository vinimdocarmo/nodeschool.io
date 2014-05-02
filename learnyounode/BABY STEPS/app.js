var numbers = process.argv.slice(2),
    res = 0;

numbers.forEach(function(el) {
  res += Number(el);
});

console.log(res);
