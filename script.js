function getComputerChoice() {
  let randomChoice = Math.random();
  if (randomChoice <= 0.333) {
    return "Rock";
  } else if (randomChoice > 0.333 && randomChoice <= 0.666) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, getComputerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = getComputerChoice().toLowerCase();
  console.log(
    "userChoice = " + humanChoice + " computerChoice = " + computerChoice,
  );
  // Draw
  if (humanChoice == computerChoice) {
    console.log("It's a draw");
  }
  // Player Won
  else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore = humanScore + 1;
    console.log("You Won!");
  }
  // Player Lose
  else {
    computerScore = computerScore + 1;
    console.log("You Lost!");
  }
  console.log(
    "Player Score = " + humanScore + "|| Computer Score = " + computerScore,
  );
}

let rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () =>
  playRound("rock", getComputerChoice),
);

let paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () =>
  playRound("paper", getComputerChoice),
);

let scissorButton = document.querySelector("#scissors");
scissorButton.addEventListener("click", () =>
  playRound("scissors", getComputerChoice),
);
