function repeat (fn, n) {
  if (n <= 0) return;
  fn();
  return repeat(fn, --n);
}

module.exports = repeat;
