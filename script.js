/*
 *            Basic Algorithm Plan
 *  ----------------------------------------
 *
 *  1. Get user input for type of number converting (Binary or Decimal)
 *  2. Validate input (check no characters `except 0123456789` for Decimal, `01`)
 *  3. Check whether input is a binary number or a denary number
 *  4. FUNCTION calculate equivilent
 *  5. Output equivilent
 *
 */
function validate(input) {
    if (typeof input != "number") {
        document.getElementById("outputMessage").innerHTML = "INVALID NUMBER!!! Try Again...";
        return false;
    }
    else {
        return true;
    }
}

function binToDec(number) {
    var dec
    for (i in number) {
        dec = dec + (number[i] * 2 ** i);
    }
    return dec;
}

function decToBin(number) {
    var bin
    bin = String(bin)
    while (number > 0) {
        bin = bin + (number % 2)
        number = Math.floor(number / 2)
    }
    bin = Number(bin)
}

function runfull() { // Program Layout

    var number = document.getElementById("textInput");

    var numValid = false;

    while (numValid != true) {
        numValid = validate(number);
    }

    var numType = document.getElementsByName('number');
    if (numType == false) {
        var output = binToDec(number);
    }
    else {
        var output = decToBin(number);
    }

    document.getElementById("outputBox").innerHTML = number;

}