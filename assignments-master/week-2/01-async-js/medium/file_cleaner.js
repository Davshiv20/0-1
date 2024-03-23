const fs = require("fs");
async function read_and_clean() {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    const new_data = data.replace(/\s+/g, " ");
    fs.writeFile("a.txt", new_data, function () {
      console.log("Done? and cleaned successfully");
    });
  });
}
read_and_clean();
