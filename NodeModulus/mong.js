const express = require("express");
const dotEnv = require("dotenv");
const { log } = require("console");
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log("server started");
});
