var numberOfBottle = 99;
while (numberOfBottle >= 0) {
    if (numberOfBottle === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer. ");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        console.log();
    } else if (numberOfBottle === 1) {
        console.log("1 bottle of beer on the wall, 1 bottle of beer.");
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        console.log();
    } else {
        console.log(numberOfBottle + " bottles of beer on the wall, " + numberOfBottle + " bottles of beer.");
        console.log("Take one down and pass it around, " + (numberOfBottle - 1) + " bottles of beer on the wall.");
        console.log();
    }
    numberOfBottle--;
}