function lifeInWeeks(age) {

    /************Don't change the code above************/

    //Write your code here.
    var x = (90 * 365) - (age * 365);
    var y = Math.round((90 * 52.1429) - (age * 52.1429));
    var z = (90 * 12) - (age * 12);
    console.log("You have " + x + " days, " + y + " weeks and " + z + " months left.");
    /*************Don't change the code below**********/
}