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
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The sum of the two numbers " + num1 + " and " + num2 + " is " + result);
})

app.listen(PORT, function() {
    console.log("Server started at port 3000!")
})