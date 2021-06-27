const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playTo");

let scoreP1 = 0;
let scoreP2 = 0;
let isGameOver = false;
let winningScore = 3;

// When the user click 'Player1' button, the score increase by one, and we check
// if we to the winning score. If so, the game is over.
p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    scoreP1++;
    if (scoreP1 === winningScore) {
      isGameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
      p1Button.disabled = true; // '.disabled' = if the game is over, the user wont be able to click the buttons
      p2Button.disabled = true;
    }
    p1Display.textContent = scoreP1;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    scoreP2++;
    if (scoreP2 === winningScore) {
      isGameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.textContent = scoreP2;
  }
});
// Here we use the 'change' event instead of 'click', beacuse we don't want to let
// the players the option to change the winning score while they are in the middle of the game.
winningScoreSelect.addEventListener("change", function () {
  alert(`You changed the winning score to ${this.value}`);
  winningScore = parseInt(this.value); // We use parseInt, because 'this.value; is a String.
  reset(); // If the user change the winning score, we call the reset function to reset the game.
});

// When the user click the 'reset' button, P1 and P2 scores reset to zero.
resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  scoreP1 = 0;
  scoreP2 = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Button.disabled = false; // When the reset button is clicked, all the other buttons will be clickable again
  p2Button.disabled = false;
  p1Display.classList.remove("winner", "loser"); // reset the color back to black
  p2Display.classList.remove("winner", "loser");
}
