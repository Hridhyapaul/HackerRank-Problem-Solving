// ============ Solution 01 ============

function birthdayCakeCandles(candles) {
    // Write your code here
const maxValue = Math.max(...candles)
const numberOfMaxValue = candles.filter(num => num === maxValue)
const count = numberOfMaxValue.length
return count;
}

// ============ Solution 02 ============

function birthdayCakeCandles(candles) {
    // Write your code here
    let maxValue = Math.max(...candles)
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maxValue) {
            count++;
        }
    }
    return count
}