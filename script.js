const user_selection_content = document.getElementById('user_selection');
const computer_selection_content = document.getElementById('computer_selection');
const winner_selection_content = document.getElementById('winner_selection');

// function to generate a random computer selection for either rock, paper or scissors
function getComputerChoice() {
    // assign a random number from 1 to 3 to a variable
    let random_number = Math.floor(Math.random() * 3) + 1;

    // switch case to choose the desired output with the previously generated number
    switch(random_number) {
        // return rock if number = 1
        case 1: 
            computer_selection_content.innerText = 'Rock';
            return "Rock";
            break;
        // return paper if number = 2
        case 2:
            computer_selection_content.innerText = 'Paper';
            return "Paper";
            break;
        // return scissors if number = 3
        case 3:
            computer_selection_content.innerText = 'Scissors';
            return "Scissors";
            break;
        // return an error if random fails
        // this case should never happen
        default:
            return "Error";
            break;
    }
}

// function to play a single round of rock, paper or scissors
// note that playerSelection here is a function parameter, not the previous function
function playRound(playerSelection, computerSelection) {

    // debug output of both selections
    console.log("Player selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);

    // same selection -> draw
    if(playerSelection === computerSelection)
        return "Draw";

    // compare the player selection with the computer selection
    switch(playerSelection) {
        case "Rock":                                                            // Player chose Rock
            if(computerSelection === "Paper") return "Computer Wins";           // Computer chose Paper? Computer wins.
            else if(computerSelection === "Scissors") return "Player Wins";     // Computer chose Scissors? Player wins.
            break;
        case "Paper":                                                           // Player chose Paper
            if(computerSelection === "Rock") return "Player Wins";              // Computer chose Rock? Player wins.
            else if(computerSelection === "Scissors") return "Computer Wins";   // Computer chose Scissors? Computer wins.
            break;
        case "Scissors":                                                        // Player chose Scissors
            if(computerSelection === "Paper") return "Player Wins";             // Computer chose Paper? Player wins.
            else if(computerSelection === "Rock") return "Computer Wins";       // Computer chose Rock? Computer wins.
            break;
        default:
            // can't happen
            break;
    }

}

const button_rock = document.querySelector('#rock');
button_rock.addEventListener('click', () => {
    user_selection_content.innerText = 'Rock';
    winner_selection_content.innerText = playRound("Rock", getComputerChoice());
});

const button_paper = document.querySelector('#paper');
button_paper.addEventListener('click', () => {
    user_selection_content.innerText = 'Paper';
    winner_selection_content.innerText = playRound("Paper", getComputerChoice());
});

const button_scissors = document.querySelector('#scissors');
button_scissors.addEventListener('click', () => {
    user_selection_content.innerText = 'Scissors';
    winner_selection_content.innerText = playRound("Scissors", getComputerChoice());
});