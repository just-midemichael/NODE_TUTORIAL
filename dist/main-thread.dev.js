"use strict";

var http = require("node:http");

var _require = require("node:worker_threads"),
    Worker = _require.Worker;

var port = 4000;
var server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.end("Home Page");
  } else if (req.url === "/slow-page") {
    var worker = new Worker("./worker_thread.js");
    worker.on("message", function (j) {
      res.writeHead(200, {
        "Content-Type": "text/plain"
      });
      res.end("Slow Page ".concat(j));
    });
  }
});
server.listen(port, function () {
  return console.log("Server is running on port ".concat(port));
});