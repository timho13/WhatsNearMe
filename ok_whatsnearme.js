const http = require('http'); //declare module for server create.
const fs = require('fs'); // declare module for file operations.
const dt = require('./utilities');
const port=process.env.PORT || 3000 // declare port for heroku.
//var pagecode="<!DOCTYPE html><html><head><meta charset='UTF-8'/><meta name='viewport' content='width=device-width, initial-scale=1.0'><style>";
var pagecode = "";
var head_code_array = [
  'static/pagecode/aa_open_html.txt'
];
getcode(head_code_array);
pagecode+=fs.readFileSync("css_styles.css", 'utf8');
pagecode+="</style></head><body>";
var body_code_array = [
  'static/pagecode/ba_open_form.txt',
  'static/pagecode/bb_open_map_frameset.txt',
  'static/pagecode/bc_open_item_playing_frameset.txt',
  'static/pagecode/bd_open_actions_frameset.txt',
  'static/pagecode/be_close_form.txt'
];
getcode(body_code_array);
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
function getcode(code_array){
  code_array.forEach(function(item, index, array){
    pagecode+=fs.readFileSync(item, 'utf8');
  });
};
