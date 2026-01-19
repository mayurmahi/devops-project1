const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("this is devops frist project based on concepts");
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
