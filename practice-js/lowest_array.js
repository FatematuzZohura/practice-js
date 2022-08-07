function arrayChack(array) {
    let lowest = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < lowest) {
            lowest = element;
        }

    }
    return lowest;
}

let array1 = [3, 36, 8, 9, 2];
console.log(arrayChack(array1));