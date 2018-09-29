const http = require('http'); //declare module for server create.
const fs = require('fs'); // declare module for file operations.
const port=process.env.PORT || 3000 // declare port for heroku.
// initialise variables for page creation.
var header="<html><head></head>";
var footer="</body></html>";
var data=header;
// next 2 instructions could be looped through list of REST parameters.
fs.readFile('demofile1.html', function(err, data1) {
  data=data+data1; 
});
fs.readFile('demofile2.html', function(err, data2) {
  data=data+data2+footer
});
// next instruction appears to be ignored by heroku.
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
// server responds.
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();  
});
// server listensfor client request.
server.listen(port,() => {
console.log(`Server running at port `+port);
});
