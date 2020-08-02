function bmiCalculator(weight, height) {
    var bmi = Math.floor((weight / (height * height)));
    if (bmi < 18.5)
        return ("Your BMI is " + bmi + ", so you are underweight.");
    else if (bmi == 20)
        return ("Your BMI is " + bmi + ", so you have a normal weight.");
    else
        return ("Your BMI is " + bmi + ", so you are overweight.");
}