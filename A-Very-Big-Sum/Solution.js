// First Solution

function aVeryBigSum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum
}

/*<----------------------------------------->*/

// Second Solution

function aVeryBigSum(ar) {
    let sum = ar.reduce((accumulator, currentValue ) => accumulator + currentValue, 0);
    return sum
}

let array1 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

console.log(aVeryBigSum(array1))