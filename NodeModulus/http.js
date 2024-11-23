const server = require("http");
const myServer = server.createServer((req, res) => {
  res.write("Hello India!");
  res.end();
});
myServer.listen(5000);
