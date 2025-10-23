const findTheOldest = function( inputJSON ) {
    processedJSON = inputJSON
    processedJSON.forEach(function(element){
        if(element.yearOfDeath === undefined){
            element.yearOfDeath = new Date().getFullYear();
        }
    });
    sortByAgeAsc(processedJSON)
    function sortByAgeAsc(arr) {
        arr.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth));
    }
    return(processedJSON[processedJSON.length-1]);
};

// Do not edit below this line
module.exports = findTheOldest;
