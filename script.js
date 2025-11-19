const choices = ["rock", "paper", "scissors"];

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const statusEl = document.getElementById("status");
const detailEl = document.getElementById("detail");
const resetBtn = document.getElementById("reset-btn");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function getResult(player, computer) {
    if (player === computer) return "draw";
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "win";
    }
    return "lose";
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function handleChoiceClick(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    if (result === "win") {
        playerScore++;
        statusEl.textContent = "You win this round! 🎉";
    } else if (result === "lose") {
        computerScore++;
        statusEl.textContent = "Computer wins this round 😈";
    } else {
        statusEl.textContent = "It's a draw 😅";
    }

    detailEl.textContent = `You chose ${capitalize(playerChoice)}, computer chose ${capitalize(computerChoice)}.`;

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
}

document.querySelectorAll(".choice").forEach(btn => {
    btn.addEventListener("click", () => {
        const choice = btn.getAttribute("data-choice");
        handleChoiceClick(choice);
    });
});

resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = "0";
    computerScoreEl.textContent = "0";
    statusEl.textContent = "New game started ✨ Make your move!";
    detailEl.textContent = "";
});