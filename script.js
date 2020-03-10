let correctNumber = getRandomNumber();
let guesses = [];

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);

}

// Runs the game
function playGame(){
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory(numberGuess);
}

// Show the result for if the guess it too high, too low, or correct
function displayResult(num) {
  
  if (num > correctNumber) {
    showNumberAbove();
  } else if (num < correctNumber) {
    showNumberBelow();
  } else {
    showYouWon();
  } 
}

// Initialize a new game by resetting all values and content on the page
function initGame(){
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();
  document.getElementById("number-guess").value = "";
}


// Reset the HTML content for guess history
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

// Finds a random number that is the answer
function getRandomNumber(){

  let correctNumber = Math.floor(Math.random() * 100) + 1;
  return correctNumber;
}

// Keeps track of the user's inputs
function saveGuessHistory(guess) {
  guesses.push(guess);
  // console.log(guesses);
}

// Displays the user's inputs 
function displayHistory() {
  let index = guesses.length - 1; 
  let list = "<ul class='list-group'>";

  while (index >= 0) {
    list += "<li class='list-group-item'> " + "You guessed " + guesses[index] + "</li>";
    index -= 1;
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

// Sets the dialog for when the user is too high, too low, or gets the answer correct
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog('won', text);
  console.log(dialog);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
