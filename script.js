const choicesArray = ["Rock", "Paper", "Scissor"];
const container = document.querySelector("body");
const resultsDiv = document.createElement("div");

function getComputerChoice(choices) {
  const randomNum = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomNum];
  return computerChoice;
}

function playRound(computerSelection, playerSelection) {
  resultsDiv.setAttribute("id", "results");
  if (computerSelection == playerSelection) {
    resultsDiv.textContent = "You Draw!";
  } else if (
    (computerSelection == "Rock" && playerSelection == "Scissor") ||
    (computerSelection == "Paper" && playerSelection == "Rock") ||
    (computerSelection == "Scissor" && playerSelection == "Paper")
  ) {
    resultsDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissor") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissor" && computerSelection == "Paper")
  ) {
    resultsDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
  }
  let div = document.querySelector("#results");
  if (div) {
    div.remove();
  }
  container.appendChild(resultsDiv);
  return resultsDiv;
}

let playerPoints = 0;
let computerPoints = 0;
let pointsDiv = document.querySelector(".points");

function restartGame() {
  playerPoints = 0;
  computerPoints = 0;
  pointsDiv.querySelector(
    "#playerPoints"
  ).textContent = `Player: ${playerPoints}`;
  pointsDiv.querySelector(
    "#computerPoints"
  ).textContent = `Computer: ${computerPoints}`;
  document.querySelector("#results").remove();
}

function displayPlayAgainPopup(message) {
  const playAgain = confirm(message + " Play again");
  if (playAgain) {
    restartGame();
  }
}

function game(playerSelection, computerSelection) {
  let winningScore = 5;
  if (playerPoints < winningScore && computerPoints < winningScore) {
    playRound(playerSelection, computerSelection);
    if (resultsDiv.textContent.startsWith("You Win!")) {
      playerPoints += 1;
      pointsDiv.querySelector(
        "#playerPoints"
      ).textContent = `Player: ${playerPoints}`;
      if (playerPoints === winningScore) {
        setTimeout(() => {
          do {
            displayPlayAgainPopup("You Win!");
          } while (playerPoints === winningScore);
        }, 0);
      }
    } else if (resultsDiv.textContent.startsWith("You Lose!")) {
      computerPoints += 1;
      pointsDiv.querySelector(
        "#computerPoints"
      ).textContent = `Computer: ${computerPoints}`;
      if (computerPoints === winningScore) {
        setTimeout(() => {
          do {
            displayPlayAgainPopup("You Lose!");
          } while (computerPoints === winningScore);
        }, 0);
      }
    }
  } else {
    restartGame();
  }
}

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorBtn = document.querySelector("#scissor");

rockBtn.addEventListener("click", () => {
  game("Rock", getComputerChoice(choicesArray));
});
paperBtn.addEventListener("click", () => {
  game("Paper", getComputerChoice(choicesArray));
});
scissorBtn.addEventListener("click", () => {
  game("Scissor", getComputerChoice(choicesArray));
});
