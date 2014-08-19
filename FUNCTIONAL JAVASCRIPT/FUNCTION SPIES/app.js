function Spy(target, method) {
  var obj = { count: 0 },
      fn = target[method];

  target[method] = function() {
    obj.count++;
    return fn.apply(this, arguments);
  };

  return obj;
}
   
module.exports = Spy;
