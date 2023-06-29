// Simple HTTP server

const http = require("http");

const data = require("../data.json")

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
});

const PORT = process.env.PORT || 3000 ;
server.listen(PORT, () => console.log("Serving running on port 3000"));