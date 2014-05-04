var fs = require('fs'),
    path = require('path'),
    assert = require('assert'),
    dir = process.argv[2],
    extension = "." + process.argv[3];

fs.readdir(dir, function(err, list) {
    assert.ifError(err);

    list.forEach(function(file) {
        if(extension === path.extname(file))
            console.log(file);
    });
});
