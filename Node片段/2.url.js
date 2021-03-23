const url = require('url');
const http = require('http')

http.createServer(function(req, res) {
  if (req.url !== '/favicon.ico') {
    console.log(req.url);
    const result = url.parse(req.url, true);
    console.log(result);
    console.log(result.query);

    res.writeHead(200, {
      'Content-Type': 'text/html;charset=UTF-8'
    });

    res.write('<h1 style="text-align:center">Hello NodeJS2</h1>');
    res.end();
  }
}).listen(3000);
