const choicesArray = ["Rock", "Paper", "Scissor"];

function getComputerChoice(choices) {
  const randomNum = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomNum];
  return computerChoice;
}

// capitalizes first letter in a string
function capitalizeFirstLetter(string) {
  string = string.toLowerCase();
  let capitalFirstLetter = string[0].toUpperCase() + string.slice(1);
  return capitalFirstLetter;
}

function getPlayerChoice() {
  while (true) {
    let playerChoice = prompt("Rock-Paper-Scissor?");
    playerChoice = capitalizeFirstLetter(playerChoice).trim();

    if (choicesArray.includes(playerChoice) == true) {
      return playerChoice;
    } else {
      alert("Please enter a valid choice (Rock, Paper, or Scissor).");
    }
  }
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    return "You Draw!";
  } else if (
    (computerSelection == "Rock" && playerSelection == "Scissor") ||
    (computerSelection == "Paper" && playerSelection == "Rock") ||
    (computerSelection == "Scissor" && playerSelection == "Paper")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissor") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissor" && computerSelection == "Paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  }
}

function game() {
  let computerWin = 0;
  let playerWin = 0;
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    const computerSelection = getComputerChoice(choicesArray);
    const playerSelection = getPlayerChoice();

    console.log(playRound(computerSelection, playerSelection));
    if (
      playRound(computerSelection, playerSelection) ==
      `You Lose! ${computerSelection} beats ${playerSelection}.`
    ) {
      computerWin++;
    } else if (
      playRound(computerSelection, playerSelection) ==
      `You Win! ${playerSelection} beats ${computerSelection}.`
    ) {
      playerWin++;
    }
  }
  if (computerWin == playerWin) {
    console.log("You Draw!");
  } else if (computerWin > playerWin) {
    console.log("You Lose!");
  } else if (computerWin < playerWin) {
    console.log("You Win!");
  }
}

game();
