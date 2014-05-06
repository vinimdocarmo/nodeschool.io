var http = require('http'),
    bl = require('bl'),
    assert = require('assert'),
    url = process.argv[2];

http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
        assert.ifError(err);

        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
