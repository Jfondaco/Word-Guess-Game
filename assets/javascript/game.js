// create variables here
var score = 0;
var guessesLeft = 11;

//grab p ids
var winsText = document.getElementById("wins");
var guessesText= document.getElementById("guesses-left");
var lettersText = document.getElementById("letters-guessed");
//below line may be incorrect????
var progress = document.getElementById("guess-bar");

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
    for (var j = 0; j < answer.length; j++) {
        if (answer[j] === userGuess) {
        answerArray[j] = userGuess;
        guessesLeft--;
        }

        //display results and progress
        guessesText.textContent = "Guesses remaining " + guessesLeft; //error with this line "Uncaught TypeError: Cannot set property 'textContent' of null" assume it cant find the guesses-left id for some reason?
        winsText.textContent = "Wins: " + score;
        lettersText.textContent = "Letters Guessed" + userGuess;
        progress.textContent = answerArray;

        console.log(userGuess);
    }    
}


