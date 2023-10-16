// =========== Solution 01 ===========

function miniMaxSum(arr) {
  // Write your code here
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }
  const maxSum = totalSum - maxValue;
  const minSum = totalSum - minValue;
  console.log(maxSum, minSum);
}


// =========== Solution 02 ===========


