const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const homeStartingContent = "Hello there! I am Faran Mohammad, a developer, designer and tech-enthusiast. I am going to use this blog to update my achievements while working as a developer. I am expected to graduate with a CS degree by mid 2021. Till then, I am a freelancer.";
const aboutContent = "I am pursuing Computer Science and Engineering from Integral University, Lucknow, India. I am a full fledged fullstack web developer. I also know technologies such as React and Flutter. I am fluent in languages such as English, Hindi and Urdu.";
const contactContent = "For more details log on to https://faran.xyz/";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/blogDB", { useNewUrlParser: true });

const postSchema = {
    title: String,
    content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res) {

    Post.find({}, function(err, posts) {
        res.render("home", {
            startingContent: homeStartingContent,
            posts: posts
        });
    });
});

app.get("/compose", function(req, res) {
    res.render("compose");
});

app.post("/compose", function(req, res) {
    const post = new Post({
        title: req.body.postTitle,
        content: req.body.postBody
    });


    post.save(function(err) {
        if (!err) {
            res.redirect("/");
        }
    });
});

app.get("/posts/:postId", function(req, res) {

    const requestedPostId = req.params.postId;

    Post.findOne({ _id: requestedPostId }, function(err, post) {
        res.render("post", {
            title: post.title,
            content: post.content
        });
    });

});

app.get("/about", function(req, res) {
    res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function(req, res) {
    res.render("contact", { contactContent: contactContent });
});


app.listen(PORT, function() {
    console.log("Server started on port 3000");
});