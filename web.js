var fs = require('fs');
var express = require('express');
var app = express();
var print_buffer = new Buffer(fs.readFileSync('index.html'), "utf-8");
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(print_buffer.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

console.log(print_buffer.toString("utf-8"));
