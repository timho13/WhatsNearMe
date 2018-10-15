const http = require('http'); //declare module for server create.
const fs = require('fs'); // declare module for file operations.
const dt = require('./utilities');
const port=process.env.PORT || 3000 // declare port for heroku.
var pagecode="<!DOCTYPE html><html><head><meta charset='UTF-8'/><meta name='viewport' content='width=device-width, initial-scale=1.0'><style>";
pagecode+=fs.readFileSync("css_styles.css", 'utf8');
pagecode+="</style></head><body>";
//var pagecode=headstyle();
var html_code_array = [
  'a1_open_form.txt',
  'b1_open_map_frameset.txt',
  'c1_open_item_playing_frameset.txt',
  'd1_open_actions_frameset.txt',
  'a2_close_form.txt'
];
html_code_array.forEach(function(item, index, array){
  pagecode+=fs.readFileSync(item, 'utf8');
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
function headstyle(){
    return `<!DOCTYPE html><html>
<head>
  <meta charset='UTF-8'/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    /* mobile styles */
    @media only screen and (max-width: 414px) {
      body {
        background-color: #000000;
      }
    }
    /* tablet & desktop styles */
    @media only screen and (min-width: 415px) {
      body {
        background-color: #b2d6ff; /* blue */
        width: 414px;
      }
    }
    body {
      color: blue;
    }
    form {
      border-radius: 25px;
      border: 2px solid #73ad21;
      padding: 20px;
      background-color: #ffffff;
    }
    div {
      display: block;
    }
    p {
      font-size: 14px;
    }
    .button {
      background-color: #4caf50; /* green */
      border: none;
      color: white;
      padding: 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }
    .button1 {border-radius: 2px;}
    .button2 {border-radius: 4px;}
    .button3 {border-radius: 8px;}
    .button4 {border-radius: 12px;}
    .button5 {border-radius: 50%;}
  </style>
</head>
<body>`;
};
