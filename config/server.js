const express = require("express");
const bodyParser = require("body-parser");
const consign = require("consign");
const app = express();


app.use(bodyParser.json());

const envPath = "dev.env";
require("dotenv").config({
    path: envPath
})

consign()
    .include("./routes")
    .into(app);


module.exports = app;


