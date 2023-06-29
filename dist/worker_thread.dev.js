"use strict";

var _require = require("node:worker_threads"),
    parentPort = _require.parentPort;

var j = 0;

for (var i = 0; i < 60000000; i++) {
  j++;
}

parentPort.postMessage(j);