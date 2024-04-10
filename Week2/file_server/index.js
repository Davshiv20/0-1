const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const directoryPath =
  "C://Users//Shivam Dave//Desktop//0-1//Week2//file_server";

// Function to read files from the directory
// function fileReader(callback) {
//   fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//       console.log("Error reading directory", err);
//       callback(err, null);
//       return;
//     }
//     console.log("Files in the directory: ", files);
//     callback(null, files);
//   });
// }
// console.log(__dirname);
app.get("/", function (req, res) {
  res.send("Welcome to the file server!");
});

app.get("/files", function (req, res) {
  fs.readdir(__dirname, (error, files) => {
    if (error) {
      return res.status(500).json({ error: "Failed to retrieve files" });
    }
    res.json(files);
  });
  // Call fileReader and send response in the callback
  //   fileReader((err, files) => {
  //     if (err) {
  //       res.status(500).send("Error reading directory");
  //       return;
  //     }
  //     res.send(files.toString());
  //   });
});
app.get("/files/:filename", (req, res) => {
  const filepath = path.join(__dirname, req.params.filename);
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(404).json({ error: "failed to read content" });
    }
    res.send(data);
  });
});
app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
