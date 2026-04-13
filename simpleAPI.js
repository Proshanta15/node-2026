const http = require("http");

const userData = [
  {
    id: 1,
    name: "Proshanta",
    email: "proshanta@example.com",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
  },
];

const server = http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(userData));
    res.end();
  })
  .listen(3000);
