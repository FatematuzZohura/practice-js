function check(n) {
    var p;

    if (n % 2 == 0) {
        p = "even number";
    } else {
        p = "odd number";
    }

    return p;

}

var number = 6;
console.log("The number is", check(number));