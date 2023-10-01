function getComputerChoice() {
  let choicesArray = ["Rock", "Paper", "Scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  let computerChoice = choicesArray[randomNum];
  return computerChoice;
}

// capitalizes first letter in a string
function capitalizeFirstLetter(string) {
  string = string.toLowerCase();
  let capitalFirstLetter = string[0].toUpperCase() + string.slice(1);
  return capitalFirstLetter;
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock-Paper-Scissor?");
  playerChoice = capitalizeFirstLetter(playerChoice).trim();
  return playerChoice;
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    return "You Draw!";
  } else if (
    (computerSelection == "Rock" && playerSelection == "Scissor") ||
    (computerSelection == "Paper" && playerSelection == "Rock") ||
    (computerSelection == "Scissor" && playerSelection == "Paper")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}, `;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissor") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissor" && computerSelection == "Paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(computerSelection, playerSelection));
