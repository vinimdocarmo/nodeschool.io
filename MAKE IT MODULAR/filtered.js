var fs = require('fs'),
    path = require('path');

module.exports = function(dir, filter, callback) {
    fs.readdir(dir, function(err, list) {
        if(err)
            return callback(err);

        list = list.filter(function(el) {
            return path.extname(el) === "." + filter;
        });

        callback(null, list);
    });
}

