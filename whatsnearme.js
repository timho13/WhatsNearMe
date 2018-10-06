const http = require('http'); //declare module for server create.
const fs = require('fs'); // declare module for file operations.
var dt = require('./utilities');
const port=process.env.PORT || 3000 // declare port for heroku.
// initialise variables for page creation.
var header="<html><head></head><body>";
var pageinfo="Last refresh: "+dt.myDateTime()+"</br>"+"<a href='https://github.com/timho13/WhatsNearMe'>Github</a>"+"</br>";
var footer="</body></html>";
var data=header+pageinfo;
// next 2 instructions could be looped through list of REST parameters.
fs.readFile('a1_open_form.html', function(err, data1) {
  data=data+data1;
});
fs.readFile('b1_open_map_frameset.html', function(err, data1) {
  data=data+data1;
});
fs.readFile('b2_close_frameset.html', function(err, data1) {
  data=data+data1;
});
//fs.readFile('c1_open_item_playing_frameset.html', function(err, data1) {
//  data=data+data1;
//});
//fs.readFile('b2_close_frameset.html', function(err, data1) {
//  data=data+data1;
//});
fs.readFile('d1_open_actions_frameset.html', function(err, data1) {
  data=data+data1;
});
fs.readFile('b2_close_frameset.html', function(err, data1) {
  data=data+data1;
});
fs.readFile('a2_close_form.html', function(err, data1) {
  data=data+data1;
});
  data=data+footer;
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
