const express = require("express");
const dotEnv = require("dotenv");
const app = express();
const { MongoClient } = require("mongodb");
const PORT = 5000;

dotEnv.config();
MongoClient.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo DB connected successfully");
  })
  .catch(error);

app.listen(PORT, () => {
  console.log("server started");
});
