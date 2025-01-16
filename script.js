const choicesArray = ["Rock", "Paper", "Scissor"];
const container = document.querySelector("body");
const result = document.querySelector(".message h3");
const resultExplanation = document.querySelector(".message p");

// selected option img
const playerOption = document.querySelector(".points .player img");
const computerOption = document.querySelector(".points .computer img");

function getComputerChoice(choices) {
  const randomNum = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomNum];
  return computerChoice;
}

function displaySelections(playerSelection, computerSelection) {
  let rock = "assets/icons/rock.png";
  let paper = "assets/icons/paper.png";
  let scissor = "assets/icons/scissors.png";

  if (playerSelection == "Rock") {
    playerOption.src = rock;
  } else if (playerSelection == "Paper") {
    playerOption.src = paper;
  } else {
    playerOption.src = scissor;
  }

  if (computerSelection == "Rock") {
    computerOption.src = rock;
  } else if (computerSelection == "Paper") {
    computerOption.src = paper;
  } else {
    computerOption.src = scissor;
  }
}

function playRound(playerSelection, computerSelection) {
  displaySelections(playerSelection, computerSelection);
  let winner = "";

  if (computerSelection == playerSelection) {
    result.textContent = "It's a tie!";
    resultExplanation.textContent = `${playerSelection} ties with ${computerSelection}`;
  } else if (
    (computerSelection == "Rock" && playerSelection == "Scissor") ||
    (computerSelection == "Paper" && playerSelection == "Rock") ||
    (computerSelection == "Scissor" && playerSelection == "Paper")
  ) {
    result.textContent = "You Lost!";
    resultExplanation.textContent = `${computerSelection} beats ${playerSelection}.`;

    winner = "Computer";
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissor") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissor" && computerSelection == "Paper")
  ) {
    result.textContent = "You Won!";
    resultExplanation.textContent = `${playerSelection} beats ${computerSelection}.`;

    winner = "Player";
  }

  return winner;
}

let playerPoints = 0;
let computerPoints = 0;
let pointsDiv = document.querySelector(".points");

function restartGame() {
  playerPoints = 0;
  computerPoints = 0;
  pointsDiv.querySelector("#playerPoints").textContent = "Player: 0";
  pointsDiv.querySelector("#computerPoints").textContent = "Computer: 0";

  result.textContent = "Choose your weapon";
  resultExplanation.textContent = "First to score five points wins the game";

  playerOption.src = "assets/icons/question.png";
  computerOption.src = "assets/icons/question.png";
}

function displayPlayAgainPopup(message) {
  const playAgain = confirm(message + " Play again");
  if (playAgain) {
    restartGame();
  }
}

function game(playerSelection, computerSelection) {
  let winningScore = 5;

  if (playerPoints > winningScore && computerPoints > winningScore) {
    restartGame();
  }

  let winner = playRound(playerSelection, computerSelection);

  if (winner == "Player") {
    playerPoints += 1;
    pointsDiv.querySelector(
      "#playerPoints"
    ).textContent = `Player: ${playerPoints}`;

    if (playerPoints === winningScore) {
      setTimeout(() => {
        displayPlayAgainPopup("You Won!");
      }, 60);
    }
  } else if (winner == "Computer") {
    computerPoints += 1;
    pointsDiv.querySelector(
      "#computerPoints"
    ).textContent = `Computer: ${computerPoints}`;

    if (computerPoints === winningScore) {
      setTimeout(() => {
        displayPlayAgainPopup("You Lost!");
      }, 60);
    }
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
