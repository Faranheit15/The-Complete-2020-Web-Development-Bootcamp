const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello!</h1>");
})

app.get("/contact", function(req, res) {
    res.send('Feel free to contact me at <a href="mailto: ffaranm15 @gmail.com ">ffaranm15@gmail.com</a>!');
})

app.get("/about", function(req, res) {
    res.send("I am a web developer and a designer!");
})

app.get("/hobby", function(req, res) {
    res.send("<ul><li>Coding</li><li>Technical Blogs</li><li>Netflix</li></ul>");
})

app.listen(3000, function() {
    console.log("Server started on port 3000!")
});