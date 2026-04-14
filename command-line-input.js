const http = require("http");
const arg = process.argv;

console.log("-------", arg[2]);

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  })
  .listen(arg[2]);
