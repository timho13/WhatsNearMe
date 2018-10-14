const http = require('http'); //declare module for server create.
const fs = require('fs'); // declare module for file operations.
const dt = require('./utilities');
const port=process.env.PORT || 3000 // declare port for heroku.
var pagecode="<!DOCTYPE html><html><head><meta charset='UTF-8'/>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<style> .button4 {border-radius: 12px;} .button5 {border-radius: 50%;}</style></head><body>";
var html_code_array = [
  'a1_open_form.txt',
  'b1_open_map_frameset.txt',
  'c1_open_item_playing_frameset.txt',
  'd1_open_actions_frameset.txt',
  'a2_close_form.txt'
];
html_code_array.forEach(function(item, index, array){
  fs.readFile(item, function(err, data1) {
    pagecode+=data1;
  });
});
pagecode+="</body></html>";
// server responds.
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(pagecode);
  res.end();
});
// server listens for client request.
server.listen(port,() => {
  console.log(`Server running at port `+port);
});
