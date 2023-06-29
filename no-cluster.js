const http = require("node:http");

const port = 8000;
const printMessage = `Server is running on port ${port}` 
const server = http.createServer((res, req) => {
    if(req.url === ("/")) {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Home Page");
    }
    else if (req.url === "/slow-page") {
        for (let i = 0; i < 600000000; i++) {} // Simulate CPU work
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Slow Page");
    }
});


server.listen(8000, () => console.log(printMessage));