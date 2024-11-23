const server = require("http");
http.createServer((req, res) => {
  res.write("Hello India!");
  res.end();
});
server.listen(5000);
