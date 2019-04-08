var Word = require("./word.js");
var words = require("./words.js");
var

function Game(){
    this.start = function(){
        console.log("Game has started");
        this.guessesLeft = 10;
        this.newWord();
    }
    this.newWord = function(){
        secretWord = words[Math.floor(Math.random() * words.length)];
        console.log(secretWord);
        this.thisWord = new Word(secretWord);
    }
    this.guess = function(){

    }
}

module.exports = Game;