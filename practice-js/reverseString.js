function reverseString(text) {
    let reverse = " "
    for (const letter of text) {
        console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}

let greetings = "how are you";

const reversed = reverseString(greetings);
console.log(reversed);