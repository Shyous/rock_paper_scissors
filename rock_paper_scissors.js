// PLaying against the computer the rock, paper and scissors game.
        let humanScore = 0;
        let computerScore = 0;

// write a function that randomly returns “rock”, “paper” or “scissors”.

// GET a random value from the computer to link to the options rock, paper or scissors;
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

        if (computerChoice === 0) {
            return "rock";
        } else if (computerChoice === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    
}

// GET a input from the user to choosse between rock, paper or scissors;

function getHumanChoice (){
    let humanChoice = prompt("Choose: Rock, Paper or Scissors.");
    // The comparations have to match with all lower cases
    return humanChoice.toLowerCase();
}

// Compare the computer choice with the use choice; Increase the score for the winner.

// IF computerChoice equals user choice, it`s a draw;

// IF computerChoice is Rock, and user choice is scissors, computer wins; OR
// IF computerChoice is Paper, and user choice is rocks, computer wins; OR
// IF computerChoic is Scissors, and user choice is paper, computer wins; OR
// ELSE?
// IF computerChoice is Rock, and user choice is paper, user wins; OR
// IF computerChoice is Paper, and user choice is scissors, userwins; OR
// IF computerChoice is Scissors, and user choise ir rocks, user wins; OR
// SHOW message "You win for each IF.


function playRound (computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("A draw! " + computerChoice + "is equal " + humanChoice +"." );
    }

    else if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")) {
                console.log("You lose!"  + computerChoice + "beats" + humanChoice);
                computerScore++;
       }
    else {
        console.log("You win!"  + computerChoice + "does not beat" + humanChoice);
        humanScore++;
    }   
  
}

//Play 5 rounds and count the score to win the game
// WHILE count <=5, playRound

function playGame() {
   let i = 1;
// Wrong! You have to add the functions to the loop to make them work 5 times.
    while (i <= 5) {

        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        console.log("Computer chose: " + computerChoice);
        console.log("You chose: " + humanChoice);

        playRound(computerChoice, humanChoice);

        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);

        i++;
    }
}

    // start the game
playGame()

 if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a draw!");
    }