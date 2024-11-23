const express = require("express");
const app = express();
const port = 5000;

app.get("/apple", (req, res) => {
  res.send("Apple is in red colour");
});

app.get("/orange", (req, res) => {
  res.send("Orange is in yellow colour");
});

app.listen(port, () => {
  console.log("server running suceessfully on port 5000");
});
