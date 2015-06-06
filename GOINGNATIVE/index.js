var bindings = require('bindings'),
    addon    = bindings('myaddon');

addon.delay(+process.argv[2], console.log.bind(console, "Done!"));
