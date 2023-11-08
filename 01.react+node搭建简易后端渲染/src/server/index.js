import React from "react"; // 这里一定要引入 不然会发生报错
import { renderToString } from "react-dom/server";
import App from "../App";

const express = require("express");
const app = express();
app.use(express.static("build"));
// https://react.dev/reference/react-dom/server/renderToString
// 使用rednerToString将react组件转换成html文件
const htmlContent = renderToString(<App></App>);

app.get("/*", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>react+node简易搭建后端渲染</title>
  </head>
  <body>
    <div id="root">${htmlContent}</div>
    <script type="text/javascript" src="/client/client_bunble.js"></script>
  </body>
  </html>`);
});

app.listen(3000, () => {
  console.log("请访问localhost:3000  查看内容");
});
