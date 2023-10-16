// ============ Solution 01 ============

function birthdayCakeCandles(candles) {
    // Write your code here
const maxValue = Math.max(...candles)
const numberOfMaxValue = candles.filter(num => num === maxValue)
const count = numberOfMaxValue.length
return count;
}