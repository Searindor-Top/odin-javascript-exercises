const sumAll = function(num1, num2) {
    if( (num1 < 0) || (num2 < 0) || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
    }
    maxNum = Math.max(num1, num2);
    lowNum = Math.min(num1, num2);

    outputSum = 0;
    for(i = lowNum; i <= maxNum; i++){
        outputSum += i;
    }
    return outputSum;
};

// Do not edit below this line
module.exports = sumAll;
