var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

//start the game on keypress
$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

//trigger a handler function when a button is clicked
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //playing audio
    playSound(userChosenColour);
    //box shadow on button press
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    //generating a random number between 0 and 3
    var randomNumber = Math.floor((Math.random() * 4) + 0);

    //mapping the chosen number to the color from the array
    var randomChosenColour = buttonColours[randomNumber];

    //adding the color to the list gamePattern
    gamePattern.push(randomChosenColour);

    //animating with the flashing effect
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //playing audio
    playSound(randomChosenColour);

    //increasing the level every time this function is called
    level++;

    //updating h1 with the current level
    $("#level-title").text("Level " + level);

    //reset for next level
    userClickedPattern = [];
}

//function for playing sound
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

//function to check the answer
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}