var fs = require('fs'),
    path = require('path'),
    dir = process.argv[2],
    extension = "." + process.argv[3];

fs.readdir(dir, function(err, list) {
    list.forEach(function(file) {
        if(extension === path.extname(file))
            console.log(file);
    });
});
