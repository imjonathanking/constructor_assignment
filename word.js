var Letter = require("./letter.js");

//This will separate out the string of the selected word into
//an array
function parseWord(placeholder){
    allLetters = [];
    console.log("inside parseWord");

    for (i = 0; i < placeholder.length; i++){
        allLetters.push(new Letter(placeholder[i]));
    }
    
    console.log("inside parseWord");

    console.log("For each statement: --------------");

    //Just logging all of the letter objects
    allLetters.forEach(function(thisLetter){
        console.log(thisLetter);
    })

    return allLetters;
}

function wordObjects(placeholder){
    // for (i = 0; i < placeholder.length; i++){
    // }
}

//Constructor that will separate each of the letters of the word, 
//and send them all into the Letter constructor
function Word(theWord){
    // this.wordTest = "Word Test";
    this.letters = parseWord(theWord);
    this.logObject = function(){
        console.log(this.letters);
    }
}

module.exports = Word;