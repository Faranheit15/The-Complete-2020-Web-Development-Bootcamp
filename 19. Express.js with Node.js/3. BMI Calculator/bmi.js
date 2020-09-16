const express = require("express");
const bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
    // console.log(__dirname);
})

app.post("/", function(req, res) {
    var w = Number(req.body.weight);
    var h = Number(req.body.height);
    var result = w / (h * h);
    res.send("Your BMI is " + result);
})

app.listen(PORT, function() {
    console.log("Server started at port 3000!")
})