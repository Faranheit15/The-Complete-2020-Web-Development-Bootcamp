const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

var items = ["Buy food", "Cook food", "Eat food"];

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    // var currentDay = today.getDay();
    // var day = "";
    // if ((currentDay === 6) || (currentDay === 0)) {
    //     day = "Weekend";
    // } else if (currentDay === 1) {
    //     day = "Monday";
    // } else if (currentDay === 2) {
    //     day = "Tuesday";
    // } else if (currentDay === 3) {
    //     day = "Wednesday";
    // } else if (currentDay === 4) {
    //     day = "Thursday";
    // } else if (currentDay === 5) {
    //     day = "Friday";
    // }
    res.render("list", { kindOfDay: day, newListItems: items });
})

app.post("/", function(req, res) {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(PORT, function() {
    console.log("Server running at port 3000");
})