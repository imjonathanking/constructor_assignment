var Letter = require("./letter.js");

//This will separate out the string of the selected word into
//an array
function parseWord(placeholder){
    allLetters = [];
  
    for (i = 0; i < placeholder.length; i++){
        allLetters.push(new Letter(placeholder[i]));
    }

    return allLetters;
}

//Constructor that will separate each of the letters of the word, 
//and send them all into the Letter constructor
function Word(theWord){
    this.letters = parseWord(theWord);
}

module.exports = Word;