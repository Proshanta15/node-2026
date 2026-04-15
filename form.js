const http = require("http");
const fs = require("fs");

// const server = http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/html" });
//     if (req.url == "/") {
//       res.write(`
//         <form action="/submit" method="post">
//             <input type="text" name="username" placeholder="Username" />
//             <input type="password" name="password" placeholder="Password" />
//             <button type="submit">Submit</button>
//         </form>`);
//     } else if (req.url == "/submit") {
//       res.write("<h1>Form Submitted</h1>");
//     }

//     res.end();
//   })
//   .listen(3000);

const server = http
  .createServer((req, res) => {
    fs.readFile("html/form.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.write("Internal Server Error");
        res.end();
        return;
      }
      if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      } else if (req.url === "/submit") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>Form Submitted</h1>");
        res.end();
      }
    });
  })
  .listen(3000);
