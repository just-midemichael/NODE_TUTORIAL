const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os");

console.log(OS.cpus().length, "cpu cores are in this local machine");

if(cluster.isMaster) {
    console.log(`Master Process ${process.pid} is running`);
    cluster.fork();// First Worker
    cluster.fork();// Second Worker
}
else {
    console.log(`Worker ${process.pid} started`);
    
    const server = http.createServer((req, res) => {
        
        if(req.url === ("/")) {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Home Page");
        }// First Worker
        else if (req.url === "/slow-page") {
            for (let i = 0; i < 600000000; i++) {} // Simulate CPU work
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Slow Page");
        }// Second Worker
    });
    const port = 8000;
    const printMessage = `Server is running on port ${port}` 
    
    server.listen(port, () => console.log(printMessage));
};