// ex-1
const fs = require("fs");
fs.readFile("demo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// ex-2
fs.writeFile("demo.html", "utf8", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("New file created");
});

// ex-3
const content = "My Nane is Naresh";

fs.writeFile("demo.html", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("data enetered successfully");
  }
});

// ex:4

fs.rename("demo.html", "demochange.html", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Name Changed Successfully");
  }
});

// ex:5
fs.unlink("demochange.html", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Deleted!");
  }
});
