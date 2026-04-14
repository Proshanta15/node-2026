const http = require("http");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("<h1>Home Page</h1>");
    } else if (req.url === "/about") {
      res.write("<h1>About Page</h1>");
    } else {
      res.write("<h1>Other Page</h1>");
    }
    res.end();
  })
  .listen(3000);
