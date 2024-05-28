const choices = ["rock", "paper", "scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const options = document.getElementById("choices")!.children;
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

Array.from(options).forEach(child => {
    child.addEventListener("click", () => {
        const userChoice = child.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        player!.textContent = "👤: " + userChoice.toUpperCase();
        computer!.textContent = "🖥️: " + computerChoice.toUpperCase();
        
        let ans = "";
        
        if (userChoice === computerChoice){
            ans = "TIE!"
        }
        else {
            switch (userChoice){
                case "rock":
                    ans = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "paper":
                    ans = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "scissors":
                    ans = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                    break;
            }
        }
        
        result!.textContent = ans;
        
        result?.classList?.remove("youWin", "youLose", "tie");
        
        switch (ans){
            case "TIE!":
                result!.classList.add("tie");
                break;
            case "YOU WIN!":
                result!.classList.add("youWin");
                playerScore++;
                playerScoreDisplay!.textContent = String(playerScore);
                break;
            case "YOU LOSE!":
                result!.classList.add("youLose");
                computerScore++;
                computerScoreDisplay!.textContent = String(computerScore);
                break;
        }
        
        if (playerScore > computerScore){
            playerScoreDisplay?.classList?.add("winner");
            computerScoreDisplay?.classList?.remove("winner");
        } else {
            computerScoreDisplay?.classList?.add("winner");
            playerScoreDisplay?.classList?.remove("winner");
        }
        
    })
});
