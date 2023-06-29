const http = require("node:http");
const { Worker } = require("node:worker_threads");

const port = 4000;

const server = http.createServer((req, res) => {
    if(req.url === ("/")) {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Home Page");
    }
    else if (req.url === "/slow-page") {
        const worker = new Worker("./worker_thread.js");
        worker.on("message", (j) => {     
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(`Slow Page ${j}`);
        });
    }
});

server.listen(port, () => console.log(`Server is running on port ${port}`));