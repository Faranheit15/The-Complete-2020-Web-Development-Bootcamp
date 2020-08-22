const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    if ((currentDay === 6) || (currentDay === 0)) {
        day = "Weekend";
    } else if (currentDay === 1) {
        day = "Monday";
    } else if (currentDay === 2) {
        day = "Tuesday";
    } else if (currentDay === 3) {
        day = "Wednesday";
    } else if (currentDay === 4) {
        day = "Thursday";
    } else if (currentDay === 5) {
        day = "Friday";
    }
    res.render("list", { kindOfDay: day });
})

app.listen(PORT, function() {
    console.log("Server running at port 3000");
})