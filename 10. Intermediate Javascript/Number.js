output = [];
var n = 1;

function fizzbuzz() {
    if ((n % 3 === 0) && (n % 5 === 0)) {
        output.push("FizzBuzz");
    } else if (n % 3 === 0) {
        output.push("Fizz");
    } else if (n % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(n);
    }
    n++;
    console.log(output);
}
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();