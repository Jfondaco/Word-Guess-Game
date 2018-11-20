// Current issues:
// -Lets someone guess the same letter twice
// -if answer has 2 of the same letter it adds 2 guesses remaining back (should be 1)
// -if answer has 2 of the same letter remaining guesses only decreases by 1 (should be 2)
// -need to restart when word is finished or guesses remaining = 0 and increment wins


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

    var moreToGo = true

    // registers key press.
    var userGuess = event.key;

    //reduce guessesLeft
    guessesLeft--;

    

    //need a loop where it will check the guessesMade array to see if guess was already made
        //if guess wasn't made yet push it to array
        if (guessesMade.indexOf(userGuess) === -1)
            {
            guessesMade.push(userGuess);
            }
         
        //(below doesn't work) if guess is already in the guessMade arrayy add a guess left back
        if (guessesMade.indexOf(userGuess) === 1){
            guessesLeft++;
        }
    
    //loops checking if guess matches a letter from the answer array   
        for (var j = 0; j < answer.length; j++) {
            // && guessesMade.indexOf(answer[j]) === -1 TRIED THIS WITH && IN IF LOOP // 
            if (answer[j] === userGuess) {
            answerArray[j] = userGuess;
            guessesLeft++;
            }    

            if (answerArray.includes("_")){
                moreToGo = true;
            }
            else {
                moreToGo = false;
            }
            
        }  

        if (moreToGo === false){
            score++
            // need some restart function here?
        }

        if (guessesLeft === 0){
            alert("YOU LOSE");
            // also need restart function here
        }
    
    
    
//display results and progress
guessesText.textContent = "Guesses remaining " + guessesLeft; 
winsText.textContent = "Wins: " + score;
lettersText.textContent = "Letters Guessed: " + guessesMade + " ";
progress.textContent = answerArray;    

//need a statement for a new game if guessesLeft = 0 OR if answer is complete
// if ((remainingLetters === 0) 
// wins ++ and a reload page function

// (guessesLeft === 0)){}
// you lose alert and a reload page function

console.log(moreToGo);
console.log(answerArray)
console.log(answer)

}


