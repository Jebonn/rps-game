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

function pickWinner(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        return results.textContent = "It's a draw";
    } else if (playerChoice === "Rock" && compChoice === "Scissors") {
        return results.textContent = "Player Wins";
    } else if (playerChoice === "Paper" && compChoice === "Rock") {
        return results.textContent = "Player Wins";
    } else if (playerChoice === "Scissors" && compChoice === "Paper") {
        return results.textContent = "Player Wins";
    } else {
        return results.textContent = "Computer Wins";
    }
}

function playRound() {
    const playerChoice = this.textContent;
    const compChoice = getComputerChoice();
    const roundResult = pickWinner(playerChoice, compChoice);

    if (roundResult === "Player Wins") {
        playerScoreTracker += 1;
        playerScore.textContent = `${playerScoreTracker}`;
    } else if (roundResult === "Computer Wins") {
        compScoreTracker += 1;
        compScore.textContent = `${compScoreTracker}`;
    }
}

const playerScore = document.querySelector('#player-score');
let playerScoreTracker = 0;

const compScore = document.querySelector('#computer-score');
let compScoreTracker = 0;

const results = document.querySelector('.results');
const buttons = document.querySelectorAll('#container button');
buttons.forEach(button => button.addEventListener('click', playRound));