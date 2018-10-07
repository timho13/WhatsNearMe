const http = require('http'); //declare module for server create.
const fs = require('fs'); // declare module for file operations.
var dt = require('./utilities');
const port=process.env.PORT || 3000 // declare port for heroku.
// initialise variables for page creation.
var pagecode="<html><head></head><body>";
var pageinfo="Last refresh: "+dt.myDateTime()+"</br>"+"<a href='https://github.com/timho13/WhatsNearMe'>Github</a>"+"</br>";
var footer="</body></html>";
var pagecode+=pageinfo;
var body_code_list = {
    a: 'a1_open_form.html',
    b: 'b1_open_map_frameset.html',
    c: 'b2_close_frameset.html',
    d: 'c1_open_item_playing_frameset.html',
    e: 'b2_close_frameset.html',
    f: 'd1_open_actions_frameset.html',
    g: 'b2_close_frameset.html',
    h: 'a2_close_form.html'
};
for (var filetoread in body_code_list){
fs.readFile(body_code_list[filetoread], function(err, data1) {
  pagecode=pagecode+data1;
});
};

pagecode=pagecode+footer;
// server responds.
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(pagecode);
  res.end();
});
// server listensfor client request.
server.listen(port,() => {
console.log(`Server running at port `+port);
});
