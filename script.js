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

let humanScore = 0

let computerScore = 0

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    console.log("userChoice = " + humanChoice + " computerChoice = " + computerChoice)
    // Draw
    if (humanChoice == computerChoice) {    
        console.log("It's a draw")
    } 
    // Player Won
    else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        humanScore = humanScore + 1
        console.log("You Won!")
    }   
    // Player Lose
    else {
        computerScore = computerScore + 1
        console.log("You Lost!")
    }
    console.log("Player Score = " + humanScore + "|| Computer Score = " + computerScore)
}

function playGame () {
    playRound(prompt("Pick one. Rock, paper or scissors?"), computerChoice)
    playRound(prompt("Pick one. Rock, paper or scissors?"), computerChoice)
    playRound(prompt("Pick one. Rock, paper or scissors?"), computerChoice)
    playRound(prompt("Pick one. Rock, paper or scissors?"), computerChoice)
    playRound(prompt("Pick one. Rock, paper or scissors?"), computerChoice)
}

playGame()
