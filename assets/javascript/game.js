function setState(state) {
  localStorage["word_guess_game"] = JSON.stringify(state);
}

function getState() {
  if (!("word_guess_game" in localStorage)) {
    setState({'score': 0});
  }
  return JSON.parse(localStorage["word_guess_game"]);
}

function incrementScore() {
    state = getState();
    state.score++;
    setState(state);
}

// create variables here
//var score = 0;
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

    var guessedAlready = guessesMade.indexOf(userGuess) != -1;
    if (!guessedAlready) {
        guessesMade.push(userGuess);
        guessesLeft--;
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
            incrementScore();
           
            if(confirm("Congrats!")) {
                window.location.reload();
            }
        }

        if (guessesLeft === 0){
            
            if(confirm("You Lose!")) {
                window.location.reload();
            }
            
        }

        //display results and progress
        guessesText.textContent = "Guesses remaining " + guessesLeft;
        winsText.textContent = "Wins: " + getState().score;
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
    
    else {
        alert("You already guessed " + userGuess);
    }
}
