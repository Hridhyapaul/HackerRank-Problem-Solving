// ----------------Solution 01-----------------

function plusMinus(arr) {
    let length = arr.length;
    let positiveNumbers = 0;
    let negativeNumbers = 0;
    let zero = 0;
    
    for(let i = 0; i<length; i++){
        if(arr[i]>0){
            positiveNumbers ++;
        }
        else if(arr[i]<0){
            negativeNumbers ++;
        }
        else if(arr[i]===0){
            zero ++;
        }
    }
    console.log((positiveNumbers / length).toFixed(6));
    console.log((negativeNumbers / length).toFixed(6));
    console.log((zero / length).toFixed(6));
}

// ------------------Solution 02-------------------

function plusMinus(arr) {
    const {positiveNumbers, negativeNumbers, zero} = 
        arr.reduce((acc, val) => {
            if (val > 0) {
                acc.positiveNumbers += 1;
            }
            if (val === 0) {
                acc.zero += 1;
            }
            if (val < 0) {
                acc.negativeNumbers += 1;
            }
            return acc;
        }, { 
            positiveNumbers: 0, 
            negativeNumbers: 0, 
            zero: 0 
        });

    console.log(positiveNumbers / arr.length);
    console.log(negativeNumbers / arr.length);
    console.log(zero / arr.length);
}