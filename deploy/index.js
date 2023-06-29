// Simple HTTP server

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>This is a simple server node tutorial</h2>");
});

const PORT = process.env.PORT || 3000 ;
server.listen(PORT, () => console.log("Serving running on port 3000"));