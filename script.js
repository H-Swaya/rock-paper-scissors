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
  userPick.textContent = `You picked || ${humanChoice}`;
  computerPick.textContent = `Computer picked || ${computerChoice}`;

  // Draw
  if (humanChoice == computerChoice) {
    roundResult.style.color = "black";
    roundResult.textContent = " It's a Draw!";
  }
  // Player Won
  else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore = humanScore + 1;
    roundResult.style.color = "Green";
    roundResult.textContent = " You won this round!";
  }
  // Player Lose
  else {
    computerScore = computerScore + 1;
    roundResult.style.color = "Red";
    roundResult.textContent = " You lost this round!";
  }

  userScoreDiv.textContent = `Your score: ${humanScore}`;
  computerScoreDiv.textContent = `Computers Score: ${computerScore}`;

  if (humanScore === 5) {
    setTimeout(() => alert("You won"), 0);
    location.reload();
  } else if (computerScore === 5) {
    setTimeout(() => alert("Computer won"), 0);
    location.reload();
  }
}

// Logic for button choices
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

// Element selection for score logic
let userScoreDiv = document.querySelector("#userScore");
let computerScoreDiv = document.querySelector("#computerScore");

// Element Selection for choice and results logic
let roundResult = document.querySelector("#result");
let userPick = document.querySelector("#userPick");
let computerPick = document.querySelector("#computerPick");
