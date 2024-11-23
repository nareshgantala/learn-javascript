const fs = require("fs");
fs.readFile("demo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

fs.writeFile("demo.html", "utf8", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("New file created");
});

const content = "My Nane is Naresh";

fs.writeFile("demo.html", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("data enetered successfully");
  }
});
