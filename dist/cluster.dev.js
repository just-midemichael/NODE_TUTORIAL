"use strict";

var cluster = require("node:cluster");

var http = require("node:http");

var OS = require("node:os");

console.log(OS.cpus().length, "cpu cores are in this local machine");

if (cluster.isMaster) {
  console.log("Master Process ".concat(process.pid, " is running"));
  cluster.fork(); // First Worker

  cluster.fork(); // Second Worker
} else {
  console.log("Worker ".concat(process.pid, " started"));
  var server = http.createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, {
        "Content-Type": "text/plain"
      });
      res.end("Home Page");
    } // First Worker
    else if (req.url === "/slow-page") {
        for (var i = 0; i < 600000000; i++) {} // Simulate CPU work


        res.writeHead(200, {
          "Content-Type": "text/plain"
        });
        res.end("Slow Page");
      } // Second Worker

  });
  var port = 8000;
  var printMessage = "Server is running on port ".concat(port);
  server.listen(port, function () {
    return console.log(printMessage);
  });
}

;