const server = require("http");
server.createServer((req, res) => {
  res.write("Hello India!");
  res.end();
});
server.listen(5000);
