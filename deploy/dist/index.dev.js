"use strict";

// Simple HTTP server
var http = require("http");

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end("<h2>This is a simple server node tutorial</h2>");
});
var PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
  return console.log("Serving running on port 3000");
});