"use strict";

var http = require("node:http");

var port = 8000;
var printMessage = "Server is running on port ".concat(port);
var server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.end("Home Page");
  } else if (req.url === "/slow-page") {
    for (var i = 0; i < 600000000; i++) {} // Simulate CPU work


    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.end("Slow Page");
  }
});
server.listen(8000, function () {
  return console.log(printMessage);
});