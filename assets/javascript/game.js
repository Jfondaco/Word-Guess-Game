// create variables here
var score = 0;
var guessesLeft = 12;

//grab p ids
var winsText = document.getElementById("wins");
var guessesText= document.getElementById("guesses-left");
var lettersText = document.getElementById("letters-guessed");
//below line may be incorrect????
var progress = document.getElementById("guess-bar");

//array for answers
var possibleAnswers = ["hello", "goodbye", "world", "hard", "difficult", "stuck", "confused"];

//array for guessed letters
var guessesMade = [];

//need to select a random answer
var answer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];

// creates _ for the answer
var answerArray = [];
for (var i=0; i < answer.length; i++){
    answerArray[i] = "_";
}

//Function for guessing
document.onkeyup = function(event) {

    // registers key press.
    var userGuess = event.key;

    //store guess in guessesmade array
    // guessesMade.push(userGuess);

    //reduce guessesLeft
    guessesLeft--;

    //need a loop where it will check the guessesMade array to see if guess was already made
    for (var k = 0; k < guessesMade.length; k++){
            if (userGuess !== guessesMade[k]) {
            guessesMade.push(userGuess);
            console.log(guessesMade);
            }
    }
    
       
   
    //loops checking if guess matches a letter from the answer array
        for (var j = 0; j < answer.length; j++) {
            if (answer[j] === userGuess) {
            answerArray[j] = userGuess;
            guessesLeft++;
            }           
            

        //display results and progress
        guessesText.textContent = "Guesses remaining " + guessesLeft; 
        winsText.textContent = "Wins: " + score;
        lettersText.textContent = "Letters Guessed: " + guessesMade + " ";
        progress.textContent = answerArray;
        
        }    
    
}



