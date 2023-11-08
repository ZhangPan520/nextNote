const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("请访问localhost:3000  查看内容");
});
