// PLaying against the computer the rock, paper and scissors game.
        let humanScore = 0;
        let computerScore = 0;
        let humanChoice
        let computerChoice
        let rounds = 0;

// GET a random value from the computer to link to the options rock, paper or scissors;
function getComputerChoice() {
        computerChoice = Math.floor(Math.random() * 3);

        if (computerChoice === 0) {
            return "rock";
        } else if (computerChoice === 1) {
            return "paper";
        } else {
            return "scissors";
        }
}

// GET a input from the user to choosse between rock, paper or scissors;

function getHumanChoice (choice){
        humanChoice = choice;
        return humanChoice.toLowerCase();
}

// Compare the computer choice with the use choice; Increase the score for the winner.

// IF computerChoice equals user choice, it`s a draw;
// IF computerChoice is Rock, and user choice is scissors, computer wins; OR
// IF computerChoice is Paper, and user choice is rocks, computer wins; OR
// IF computerChoic is Scissors, and user choice is paper, computer wins; OR
// ELSE?

function playRound (computerChoice, humanChoice) {
    if (computerChoice === humanChoice) { 
        console.log("A draw! " + computerChoice + "is equal " + humanChoice +"." );
    }

    else if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")) {
                console.log("You lose! "  + computerChoice + "beats " + humanChoice);
                computerScore++;
       }
    else {
        console.log("You win! "  + computerChoice + "does not beat " + humanChoice);
        humanScore++;
    }   
  
}
//para cada botao, ao ser clicar, pega seu id
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', () => {

        //stop after 5 rounds
        if (rounds >=5){
                return;
        }
            getHumanChoice(button.id);
            computerChoice = getComputerChoice();

             console.log("Computer chose: " + computerChoice);
             console.log("You chose: " + humanChoice);

            playRound(computerChoice, humanChoice);
            rounds++;

            let result = document.querySelector(`#result`);

            result.textContent = `Round: ${rounds}.`;
            result.textContent += "  Computer Score: " + computerScore;
            result.textContent += "  Your Score: " + humanScore;

            if (rounds ===5) {
                let winner = document.querySelector("#winner");

                if (computerScore > humanScore) {
                    winner.textContent = "Computer wins!";
                } else if (humanScore > computerScore) {
                    winner.textContent = "You win!";
                } else {
                    winner.textContent = "It's a draw!";
            }}


        })
    })

