var filtering = require('./filtered'),
    assert = require('assert'),
    dir = process.argv[2],
    filter = process.argv[3];

filtering(dir, filter, function(err, filteredData) {
    assert.ifError(err);

    filteredData.forEach(function(el) {
        console.log(el);
    })
});
