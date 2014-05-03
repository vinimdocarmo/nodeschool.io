var http = require('http'),
    url = process.argv[2];

http.get(url, function(response) {
    response.setEncoding("utf8");

    response.on("data", function(data) {
        console.log(data);
    })
    .on("error", function(err) {
        console.error("There is an error :" + err);
    });
});

