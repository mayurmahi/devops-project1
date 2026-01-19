const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Full DevOps Pipeline i implement all devops piplines");
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
