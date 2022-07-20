// Randomly return "Rock", "Paper", or "Scissors" to simulate computer choice
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

// Prompt user to pick RPS choice
function getPlayerChoice() {
    invalidChoice = true;
    while(invalidChoice) {
        var choice = prompt("Type rock, paper, or scissors: ");

        choice = choice.slice(0,1).toUpperCase() + choice.slice(1).toLowerCase();

        if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
            invalidChoice = false;
        }
    }
    return choice;
}

// Return who wins or tie
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a draw!";
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        return "Player Wins!";
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        return "Player Wins!";
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        return "Player Wins!";
    } else {
        return "Computer Wins!";
    }
}

function game() {
    let maxRounds = 3;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= maxRounds; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);

        if (result === "Player Wins!") {
            playerScore += 1;
        } else if (result === "Computer Wins!") {
            computerScore += 1;
        }

        console.log(`-----Round ${i}-----`);
        console.log(`Player chooses ${playerChoice}\nComputer chooses ${computerChoice}`);
        console.log(`${result}`)
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("\nPlayer wins the match!");
    } else if (computerScore > playerScore) {
        console.log("\nComputer wins the match!");
    } else {
        console.log("\nThe match is a draw!");
    }
}

game();