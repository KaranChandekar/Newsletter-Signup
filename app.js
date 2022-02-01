// jshint: esversion6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.get("/", function (req, res) {
  res.send(__dirname + "/signup.html");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
