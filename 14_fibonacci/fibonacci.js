const fibonacci = function( inputNumber ) {
    inputNumber = +inputNumber;
    if (inputNumber === 0){
        return 0;
    } else if (inputNumber === 1){
        return 1;
    } else if (inputNumber === 2){
        return 1;
    } else if (inputNumber < 0) {
        return "OOPS";
    } else {
        accum = [1, 1];
        for(i = 2; i < inputNumber; i++){
            accum.push(accum[i-1] + accum[i-2]);
        }
        return (accum[accum.length-1]);
    }
};

// Do not edit below this line
module.exports = fibonacci;
