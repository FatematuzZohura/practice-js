// Unit Convert Inch to Feet, miles to kilometer

function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var i = 123;
console.log("My inch in feet", inchToFeet(i));

function mileToKilometer(mile) {
    var km = mile * 1.60934;
    return km;
}

var myKm = 56;
console.log("my km", mileToKilometer(myKm));