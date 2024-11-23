const express = require("express");
const app = express();
const port = 2000;

const FirstHandler = (req, res, next) => {
  if (10 > 20) {
    next();
  }
};

const SecondHandler = (req, res, next) => {
  if (10 < 20) {
    next();
  }
};

const ThirdHandler = (req, res, next) => {
  if (5 < 20) {
    next();
  }
};

app.get("/", FirstHandler, (req, res) => {
  res.send("Hello I am Home");
});

app.get("/about", SecondHandler, (req, res) => {
  res.send("Hello I am about");
});

app.get("/contact", ThirdHandler, (req, res) => {
  res.send("These are contacts");
});

app.listen(port, () => {
  console.log("server running");
});
