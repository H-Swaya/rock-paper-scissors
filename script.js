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




