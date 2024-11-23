const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(
    "mongodb+srv://naresh:abc1234@cluster1.uthww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then(() => {
    console.log("Mongo DB connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(PORT, () => {
  console.log("server running");
});
