var Word = require("./word.js");
var words = require("./words.js");
var inquirer = require("inquirer");

function Game(){
    var that = this;
    
    this.line = function(){
        console.log("|-------------------------------------|")
    }

    this.start = function(){
        console.log("Game has started");
        this.guessesLeft = 18;
        this.newWord();
    }

    this.newWord = function(){
        secretWord = words[Math.floor(Math.random() * words.length)];
        this.secretWord = secretWord;
        this.thisWord = new Word(secretWord);
        this.render();
    }

    this.render = function(){
        var output = "";

        this.thisWord.letters.forEach(function(thisLetter){

            if(!thisLetter.guessed){
                output += "-";
            }
            else{
                output += thisLetter.thisLetter;
            }
        })

        this.inquire(output);
    }

    this.inquire = function(dashes){
        this.line();
        console.log("Guess a letter!");
        console.log("Guesses left: " + that.guessesLeft);
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
        
        //If user has guessed all of the letters
        if(guessedLetters >= this.secretWord.length){
            this.line();
            console.log(that.secretWord.toUpperCase());
            console.log("You have guessed all of the letters!");
            this.line();
        }

        //If the user runs out of guesses
        else if(that.guessesLeft === 0){
            console.log("You are out of guesses :^(");
        }
        
        //Allows the user to guess again
        else{
            that.render();
        }
    }
}

module.exports = Game;