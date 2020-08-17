const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", function(req, res) {
    res.send("Hello");
})

app.listen(PORT, function() {
    console.log("Server running at port 3000");
})