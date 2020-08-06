// $("button").css("color", "red");

// $("h1").addClass("big-title margin-50");

// $("h1").text("Bye");
// $("button").text("Don't click");

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 })
});