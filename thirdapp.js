const http = require('http'); //declare module for server create.
const fs = require('fs'); // declare module for file operations.
const port=process.env.PORT || 3000 // declare port for heroku.
// initialise variables for page creation.
var headertop="<html><head>";
var headerbot="</head><body>";
var footer="</body></html>";
var data=headertop;
// next 2 instructions could be looped through list of REST parameters.
fs.readFile('index_head.html', function(err, data1) {
  data=data+data1+headerbot;
});

fs.readFile('index_body.html', function(err, data2) {
  data=data+data2+footer;
});
// server responds.
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
});
// server listens for client request.
server.listen(port,() => {
console.log(`Server running at port `+port);
});
