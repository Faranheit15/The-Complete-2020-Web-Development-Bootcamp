function whosPaying(names) {
    var pick = Math.floor((Math.random() * (names.length)));
    return (names[pick] + " is going to buy lunch!");
}

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));