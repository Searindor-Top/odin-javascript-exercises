const removeFromArray = function(array, elementToRemove, elementToRemove2 = '', elementToRemove3 = '', elementToRemove4 = '') {
    let outputArray = array.slice();

    outputArray = outputArray.filter(element => element !== elementToRemove);
    if(elementToRemove2 !== ''){
        outputArray = outputArray.filter(element => element !== elementToRemove2);
    }
    if(elementToRemove3 !== ''){
        outputArray = outputArray.filter(element => element !== elementToRemove3);
    }
    if(elementToRemove4 !== ''){
        outputArray = outputArray.filter(element => element !== elementToRemove4);
    }
    
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
