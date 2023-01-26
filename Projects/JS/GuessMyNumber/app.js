let theNumber = 0;
let userGuess = 0;
let tries = 0;


const input = document.getElementById("userInput");
const guessBtn = document.querySelector(".guess-btn");
const hint = document.getElementById("hint");


function init() {
  input.value = "0";
  tries = 0;
  hint.innerHTML ="Hint - It is between 1 and 100";
  theNumber = Math.floor (Math.random() * 100) + 1;

}


guessBtn.addEventListener("click", function(){
  checkGuess();
});

function checkGuess() {
  tries += 1;
  if(parseInt(input.value) > theNumber){
    hint.innerHTML =
    "Hint - It is smaller than " + input.value;
  } else if(parseInt(input.value) < theNumber) {
    hint.innerHTML =
    "Hint - It is larger than " + input.value;
  } else {
    displayWinningMessage();
  }
}

function playAgain(){
  let parent = document.querySelector(".you-won").parentNode;
  parent.removeChild(document.querySelector(".you-won"));
  init();
  guessBtn.style.pointerEvents = 'auto';
}

function displayWinningMessage(){
  const youWon =document.createElement("div");
  youWon.classList.add("you-won");
  const winningMsg = document.createElement("h2");
  winningMsg.classList.add('winning-msg');
  winningMsg.innerHTML =input.value + ", that's the number </br> Tries " + tries;

  youWon.appendChild(winningMsg);

  const playAgainBtn = document.createElement("button");
  playAgainBtn.classList.add("play-again");
  playAgainBtn.innerHTML ="Play Again";
  playAgainBtn.addEventListener('click', playAgain);
  youWon.appendChild(playAgainBtn);
  document.body.appendChild(youWon);
  guessBtn.style.pointerEvents = "none";
}

init();
