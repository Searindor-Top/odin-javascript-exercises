const reverseString = function(string) {
    let outputReverseString = '';
    explodedString = string.split('');
    for (i = explodedString.length ; i > 0; i--){
        outputReverseString = outputReverseString + explodedString[i-1];
    }
    console.log(outputReverseString);
    return outputReverseString;
};

// Do not edit below this line
module.exports = reverseString;
