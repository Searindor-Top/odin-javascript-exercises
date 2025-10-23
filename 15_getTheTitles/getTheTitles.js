const getTheTitles = function( inputJSON ) {
    let titles = [];
    inputJSON.forEach(element => {
        titles.push(element.title);
    });
    return(titles);
};

// Do not edit below this line
module.exports = getTheTitles;
