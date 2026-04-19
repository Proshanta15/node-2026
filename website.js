const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // ========

  let collectHeaderData = fs.readFileSync("html/header.html", "utf8");
  let collectFooterData = fs.readFileSync("html/footer.html", "utf8");
  // ========

  let file = "/home";
  if (req.url != "/") {
    file = req.url;
  }

  if (req.url != "/style.css") {
    fs.readFile(`html${file}.html`, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Internal Server Error");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(collectHeaderData + "" + data + "" + collectFooterData);
        res.end();
      }
    });
  } else if (req.url === "/style.css") {
    fs.readFile("html/style.css", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Css file not found");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
