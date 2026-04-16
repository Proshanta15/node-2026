const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const { log } = require("console");

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
        let dataBody = [];
        req.on("data", (chunk) => {
          dataBody.push(chunk);
        });

        req.on("end", () => {
          const parseData = Buffer.concat(dataBody).toString();
          let redableData = queryString.parse(parseData);
          console.log(redableData);
          let dataString =
            "My name is " +
            redableData.name +
            " and my email is " +
            redableData.email;

          // Sync method to write data to file
          // fs.writeFileSync("text/" + redableData.name + ".txt", dataString);
          // console.log("Data saved");

          // Async method to write data to file
          fs.writeFile(
            "text/" + redableData.name + ".txt",
            dataString,
            "utf-8",
            (err) => {
              if (err) {
                console.error("Error writing to file:", err);
              } else {
                console.log("Data saved in Async file");
              }
            },
          );
        });

        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>Form Submitted</h1>");
        res.end();
      }
    });
  })
  .listen(3000);
