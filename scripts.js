const btns = document.querySelectorAll('.btn');
const message = document.querySelector('#message');
const player = document.querySelector('#playerScore');
const computer = document.querySelector('#computerScore');
const result = document.querySelector('#result');

let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
let roundCount = 0;

btns.forEach(btn => btn.addEventListener('click', playGame));

// Start playing on first button click
function playGame() {

    // Clear previous game text
    result.textContent = "";

    // Get the player selection from the button
    playerSelection = this.textContent;

    // Get the computer selection
    computerSelection = getComputerSelection();

    // console.log(`Player Selection: ${playerSelection}`);
    // console.log(`Computer Selection: ${computerSelection}`);

    playRound(playerSelection, computerSelection);
}

function getComputerSelection() {
    // Get a random number 0, 1, or 2
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
        default:
            break;
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    roundCount++;

    // Run until someone has score 5 points
    if ((playerScore < 5) && (computerScore < 5)) {
        // Determine winner
        if (playerSelection === computerSelection) {
            // Draw
            message.textContent = `Round ${roundCount}: Draw! [Player] ${playerSelection.toUpperCase()} vs [Computer] ${computerSelection.toUpperCase()}`
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            // Player wins
            message.textContent = `Round ${roundCount}: You win! [Player] ${playerSelection.toUpperCase()} vs [Computer] ${computerSelection.toUpperCase()}`
            playerScore++;
        } else {
            // Player loses
            message.textContent = `Round ${roundCount}: You lose! [Player] ${playerSelection.toUpperCase()} vs [Computer] ${computerSelection.toUpperCase()}`
            computerScore++;
        }

        // Display current scores
        player.textContent = `Player: ${playerScore} points`
        computer.textContent = `Player: ${computerScore} points`
    } else {
        if (playerScore === 5) {
            result.textContent = "Game over! You win!";
        } else if (computerScore === 5) {
            result.textContent = "Game over! You lose!";
        } else {
            result.textContent = "Something went wrong";
        }
        playerScore = 0;
        computerScore = 0;
        roundCount = 0;
    }
}