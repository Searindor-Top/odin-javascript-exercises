const palindromes = function ( inputString ) {
    inputString = inputString.toLowerCase();
    let processedString = "";
    for(i = 0; i < inputString.length; i++){
        if(inputString[i].match(/^[a-z0-9]+$/i) !== null){
            processedString = processedString + inputString[i];
        }
    }

    let processedReverseString = '';
    explodedString = processedString.split('');
    for (i = explodedString.length ; i > 0; i--){
        processedReverseString = processedReverseString + explodedString[i-1];
    }

    if( processedString === processedReverseString){
        return true;
    } else {
        return false;
    }
};

palindromes("miau, miao, miai");

// Do not edit below this line
module.exports = palindromes;
