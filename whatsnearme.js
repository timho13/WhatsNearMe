const http = require('http'); //declare module for server create.
const fs = require('fs'); // declare module for file operations.
const dt = require('./utilities');
const port=process.env.PORT || 3000 // declare port for heroku.
var pagecode="<!DOCTYPE html><html><head><meta charset='UTF-8'/>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* Mobile Styles */
  @media only screen and (max-width: 414px) {
    body {
      background-color: #000000;
    }
  }
  /* Tablet & Desktop Styles */
  @media only screen and (min-width: 415px) {
    body {
      background-color: #B2D6FF; /* Blue */
        width: 414px;
    }
  }
  body {
    color: blue;
  }
  form {
    border-radius: 25px;
    border: 2px solid #73AD21;
    padding: 20px;
    background-color: #FFFFFF;
  }
  div {
    display: block;
  }
  p {
    font-size: 14px;
  }

  .button {
    background-color: #4CAF50; /* Green */
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
<body>";
var html_code_array = [
//  'a0_top_of_html.txt',
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
