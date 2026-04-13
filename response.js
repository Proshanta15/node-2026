const http = require("http");

const age = 25;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>My Node.js Server</title>     
      </head>
      <body>
        <h1>Hello this is a simple Node.js server</h1>
        <p>Welcome to my server!</p>
        <p>My age is ${age} years.</p>
        <p>Today's date is ${new Date().toLocaleDateString()}</p>
      </body>
    </html>
  `);
  res.end();
});
server.listen(4000);
