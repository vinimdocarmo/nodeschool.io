var http = require("http"),
    bl = require('bl'),
    count = 0,
    contents = [];

function printResults() {
    contents.forEach(function(el) {
        console.log(el);
    });
}

function httpGet(index) {
    http.get(process.argv[2 + index], function(res) {
        res.pipe(bl(function(err, data) {
            if(err)
                return console.error(err);

            contents[index] = data.toString();
            count++;

            if(count == 3)
                printResults();
        }));
    });
}

for(var i = 0; i < 3; i++)
    httpGet(i);
