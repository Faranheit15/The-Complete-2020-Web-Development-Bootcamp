const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", function(req, res) {
    var today = new Date();

    if ((today.getDay() === 6) || (today.getDay() === 0)) {
        res.send("<h1>Yaay! It's the weekend!</h1>");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
})

app.listen(PORT, function() {
    console.log("Server running at port 3000");
})