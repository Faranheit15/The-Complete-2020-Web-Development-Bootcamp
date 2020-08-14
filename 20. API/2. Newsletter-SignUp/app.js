const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, function() {
    console.log("Server started at port 3000!");
})