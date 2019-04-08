var Word = require("./word.js");
var words = require("./words.js");
var inquirer = require("inquirer");

function Game(){
    var that = this;

    this.start = function(){
        console.log("Game has started");
        this.guessesLeft = 10;
        this.newWord();
    }

    this.newWord = function(){
        secretWord = words[Math.floor(Math.random() * words.length)];
        this.secretWord = secretWord;
        // console.log(secretWord);
        this.thisWord = new Word(secretWord);
        this.render();
    }

    this.render = function(){
        // console.log("rendering output");
        // console.log(this);
        // console.log(this.thisWord.letters);
        var output = "";
        this.thisWord.letters.forEach(function(thisLetter){
            // console.log(thisLetter.thisLetter);
            if(!thisLetter.guessed){
                output += "-";
            }
            else{
                output += thisLetter.thisLetter;
            }
        })
        // console.log("Output: " + output);
        this.inquire(output);
    }

    this.inquire = function(dashes){
        inquirer.prompt([
            {
                type: "input",
                message: dashes,
                name: "guess"
            }
        ]).then(function(response){
            that.guessesLeft--;
            that.validate(response.guess);
        })
    }

    this.validate = function(guess){
        var guessedLetters = 0;
        //Checks each letter to see if guess matches any of them,
        //if yes, will change "guessed" property to false
        this.thisWord.letters.forEach(function(thisLetter){
            if(thisLetter.thisLetter === guess){
                thisLetter.guessed = true;
            }  
        })

        //Check to see if all letters have been guessed
        this.thisWord.letters.forEach(function(thisLetter){
            if(thisLetter.guessed){
                guessedLetters++;
            }
        })

        if(guessedLetters >= this.secretWord.length){
            console.log("----------------------");
            console.log(that.secretWord.toUpperCase());
            console.log("----------------------");
            console.log("You have guessed all of the letters!");
        }
        else if(that.guessesLeft === 0){
            console.log("You are out of guesses :^(");
        }
        else{
            console.log("Guesses left: " + that.guessesLeft);
            that.render();
        }
    }
}

module.exports = Game;