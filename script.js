let computerChoice = getComputerChoice();

function getComputerChoice () {
    let randomChoice = Math.random();
    if (randomChoice <= 0.333) {
        return "Rock"
    } else if (randomChoice > 0.333 && randomChoice <= 0.666) {
        return "Paper" 
    } else {
        return "Scissors"
    }
}

let userChoice = prompt("Pick one. Rock, paper or scissors?")

let humanScore = 0

let computerScore = 0

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("It's a draw!")
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore = computerScore + 1;
        console.log("You lost!")
    } else if (humanChoice == rock && computerChoice == "scissors") {
        humanScore = humanScore + 1
        console.log("You won!")
    }
}

playRound(userChoice, computerChoice)


