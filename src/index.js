var express = require("express");
var app = express();
var arr = ["1", "2", "3", "4", "5"];

app.post("/create/:id", (req, res) => {
  let info = req.params.id;
  res.send("post id = " + info);
  arr[0] = info;
});

app.get("/list", (req, res) => {
  res.send("hello get. arr = " + arr);
});

app.get("/", (req, res) => {
  res.send("base page");
});

app.listen(8080);

// для проверки на get/post запросы
//https://web.postman.co/workspace/My-Workspace~ffe04061-67e3-440e-870a-219e62f92fb6/request/create?requestId=940a989e-b0f5-452b-acc0-d3a36d19aa74
