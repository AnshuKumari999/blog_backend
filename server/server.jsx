const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080 || process.env.PORT;
const data = require("./data");

app.use(cors());

app.get("/", (req, res) => {
  res.json(data).status(200);
});

app.listen(port, () => {
  console.log("page is perfect");
});
