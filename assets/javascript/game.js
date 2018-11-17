// create variables here
var score = 0;
var guessesLeft = 11;

//grab Ps
var winsText = document.getElementById("wins");
var guessesText= document.getElementById("guesses-left");
var lettersText = document.getElementById("letters-guessed");

//array for answers
var possibleAnswers = ["hello", "goodbye", "world", "hard", "diffcult", "stuck", "confused"];

//need to select a random answer
var answer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];

// creates _ for the answer
var answerArray = [];
for (var i=0; i < possibleAnswers.length; i++){
    answerArray[i] = "_";
}

//Function for guessing
document.onkeyup = function(event) {

    // registers key press.
    var userGuess = event.key;

   
    //while loop for no answer yet, need guessesLeft-- need to also push guessed letter to letters-guessed
    // don't think this loop is correct?
    for (var j = 0; j < answer.length; j++) {
        if (answer[j] === userGuess) {
        answerArray[j] = userGuess;
        guessesLeft--;
        
        }

    }

    
    guessesText.textContent = "Guesses remaining " + guessesLeft;
    winsText.textContent = "Wins: " + score;
    lettersText.textContent = "Letters Guessed" + userGuess;

    console.log(userGuess);
}


