const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
    // console.log(__dirname);
})

app.listen(3000, function() {
    console.log("Server started at port 3000!")
})