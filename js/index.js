/* || ROCK PAPER SCISSORS GAME */

const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const cpuDisplay = document.getElementById("cpuDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const cpuScoreDisplay = document.getElementById("cpuScoreDisplay");
let playerScore = 0;
let cpuScore = 0;

function playGame(playerChoice) {
  const cpuChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  let count = 3;
  const countdown = setInterval(() => {
    resultDisplay.classList.remove("greenText", "redText", "tieText");
    playerDisplay.textContent = `Player: ${playerChoice}`;
    cpuDisplay.textContent = "CPU: Waiting...";
    if (count > 0) {
      resultDisplay.textContent = `${count}...`;
      count--;
    } else {
      clearInterval(countdown);
      displayResult();
    }
  }, 1000);

  function displayResult() {
    if (playerChoice === cpuChoice) {
      result = "It's a tie!";
      resultDisplay.classList.add("tieText");
    } else {
      switch (playerChoice) {
        case "Rock":
          result = cpuChoice === "Scissors" ? "You win!" : "You lose...";
          break;
        case "Paper":
          result = cpuChoice === "Rock" ? "You win!" : "You lose...";
          break;
        case "Scissors":
          result = cpuChoice === "Paper" ? "You win!" : "You lose...";
          break;
      }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    cpuDisplay.textContent = `CPU: ${cpuChoice}`;
    resultDisplay.textContent = result;

    switch (result) {
      case "You win!":
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;
      case "You lose...":
        resultDisplay.classList.add("redText");
        cpuScore++;
        cpuScoreDisplay.textContent = cpuScore;
        break;
    }
  }
}
