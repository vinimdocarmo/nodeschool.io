var bindings = require('bindings'),
    addon    = bindings('myaddon');

var arg = process.argv[2];

addon.print(arg);
