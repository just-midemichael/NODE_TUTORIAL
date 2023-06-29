"use strict";

// Simple HTTP server
var http = require("http");

var data = require("../data.json");

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify(data));
});
var PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
  return console.log("Serving running on port 3000");
});