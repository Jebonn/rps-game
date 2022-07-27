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

// Return whether computer or player is the winner or returns a draw
function pickWinner(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        return "It's a draw";
    } else if (playerChoice === "Rock" && compChoice === "Scissors") {
        return "Player Wins";
    } else if (playerChoice === "Paper" && compChoice === "Rock") {
        return "Player Wins";
    } else if (playerChoice === "Scissors" && compChoice === "Paper") {
        return "Player Wins";
    } else {
        return "Computer Wins";
    }
}

function restartGame() {
    playerScoreTracker = 0;
    compScoreTracker = 0;
    playerScore.textContent = 0;
    compScore.textContent = 0;
    restartButton.style.cssText = "visibility: hidden;";
    buttons.forEach(button => button.addEventListener('click', playRound));
    previousMovesHeader.textContent = "Previous Moves";
    document.querySelectorAll('li').forEach(listItem => listItem.remove());
}

function gameOver(winner) {
    previousMovesHeader.textContent = `${winner} Wins the Match`;
    restartButton.addEventListener('click', restartGame);
    restartButton.style.cssText = "visibility: visible;";
    buttons.forEach(button => button.removeEventListener('click', playRound));
}

function playRound() {
    const playerChoice = this.textContent;
    const compChoice = getComputerChoice();
    const roundResult = pickWinner(playerChoice, compChoice);
    
    // Updates number of wins
    if (roundResult == "Player Wins") {
        playerScoreTracker += 1;
        playerScore.textContent = playerScoreTracker;
    } else if (roundResult == "Computer Wins") {
        compScoreTracker += 1;
        compScore.textContent = compScoreTracker;
    }

    // Adds most recent move to list of previous moves
    const preMove = document.createElement('li');
    preMove.innerHTML = `Player: ${playerChoice} || Computer: ${compChoice}<br><b>${roundResult}</b>`;
    previousMoves.prepend(preMove);
    // Removes oldest move from history if oldest move is more than 6 moves ago
    if (previousMoves.childNodes.length > 6) {
        previousMoves.removeChild(previousMoves.lastChild);
    }

    // Checks scores for winner
    if (playerScoreTracker >= 5) {
        gameOver("Player");
    } else if (compScoreTracker >= 5) {
        gameOver("Computer");
    }
}

const playerScore = document.querySelector('#player-score');
const compScore = document.querySelector('#computer-score');
let playerScoreTracker = 0;
let compScoreTracker = 0;

const previousMoves = document.querySelector('#previous-moves');
const previousMovesHeader = document.querySelector('#previous-moves-header');

const restartButton = document.querySelector('#restart-btn');
const buttons = document.querySelectorAll('#container button');
buttons.forEach(button => button.addEventListener('click', playRound));
