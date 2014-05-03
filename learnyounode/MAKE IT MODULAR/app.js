var filtering = require('./filtered'),
    dir = process.argv[2],
    filter = process.argv[3];

filtering(dir, filter, function(err, filteredData) {
    if(err)
        console.error("There is an error: " + err);

    filteredData.forEach(function(el) {
        console.log(el);
    })
});
