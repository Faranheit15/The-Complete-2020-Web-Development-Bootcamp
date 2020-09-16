var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperHero = superheroes.random();
var mySuperVillain = supervillains.random();
console.log(mySuperHero + " v/s " + mySuperVillain);