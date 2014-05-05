var http = require('http'),
    url = require('url'),
    port = +process.argv[2];

http.createServer(function(req, res) {
    if(req.method !== 'GET') {
		return res.end('You have to request with a GET method');
    }

	res.writeHead(200, { 'Content-Type': 'application/json' });

    var parsedUrl = url.parse(req.url, true),
    	pathname = parsedUrl.pathname,
	    date = new Date(parsedUrl.query.iso),
	    json = {};
    
    if(pathname === '/api/parsetime') {
    	json = parsetime(date);
    } else if(pathname === '/api/unixtime') {
		json = unixtime(date)
    }

    res.end(JSON.stringify(json));
}).listen(port);

function parsetime(date) {
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
}

function unixtime(date) {
	return { unixtime: date.getTime() };
}