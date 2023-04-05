const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3001;
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/university/image/:universityName", (req, res) => {
  const directoryPath = path.join(__dirname, "public/universetyImages");
  fs.readdir(directoryPath, (err, files) => {
    if (err) return res.send("error finding image");
    const randomImage = files[Math.floor(Math.random() * files.length)];
    res.sendFile(
      `${path.join(__dirname, "public")}/universetyImages/${randomImage}`
    );
  });
});

app.listen(port, function () {
  console.log(`app listening on port ${port}!`);
});
