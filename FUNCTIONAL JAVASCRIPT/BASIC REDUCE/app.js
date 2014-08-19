function countWords (inputWords) {
  var obj = {};

  return inputWords.reduce(function(objCount, word) {
    objCount[word] = ++objCount[word] || 1;
    return objCount;
  }, {});
};

module.exports = countWords;
