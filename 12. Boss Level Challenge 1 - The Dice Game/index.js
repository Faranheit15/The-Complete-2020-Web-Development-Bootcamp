//First Dice
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
document.querySelectorAll(".img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png ");

//Second Dice
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelectorAll(".img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png ");

//Winner Declaration
var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 wins 🚩";
} else {
    heading.innerHTML = "🚩 It's a Draw 🚩";
}