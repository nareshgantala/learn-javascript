const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  if (20 < 10) {
    next();
  }
});

app.get("/", (req, res) => {
  res.send("Hello I am Home");
});

app.get("/About", (req, res) => {
  res.send("I am About");
});

app.listen(port, () => {
  console.log("server running..");
});
