const fs = require("fs");
fs.readFile("demo.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
