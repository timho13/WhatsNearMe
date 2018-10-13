const http = require('http'); //declare module for server create.
const fs = require('fs'); // declare module for file operations.
const dt = require('./utilities');
const port=process.env.PORT || 3000 // declare port for heroku.
var pagecode="";
var html_code_array = [
  'a0_top_of_html.txt',
  'a1_open_form.html',
  'b1_open_map_frameset.html',
  'b2_close_frameset.html',
  'c1_open_item_playing_frameset.html',
  'b2_close_frameset.html',
  'd1_open_actions_frameset.html',
  'b2_close_frameset.html',
  'a2_close_form.html'
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
