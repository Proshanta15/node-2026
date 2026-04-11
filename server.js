const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1>Hello this is a simple Node.js server</h1>");
    res.end("Hello World\n");
  })
  .listen(3000);
console.log("Server running at http://localhost:3000/");
