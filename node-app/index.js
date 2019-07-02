const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Bye from Viv Docker</h1>");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
