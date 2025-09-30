const removeFromArray = function(array, ...args) {
    let outputArray = array.slice();

    outputArray = outputArray.filter(element => !args.includes(element)); // Quiero que me devuelvas solo los elementos que no esten
                                                                          // en la coleccion de elementos proporcionada por args
                                                                          
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
