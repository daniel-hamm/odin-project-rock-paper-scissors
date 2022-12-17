// function to generate a random computer selection for either rock, paper or scissors
function getComputerChoice() {
    // assign a random number from 1 to 3 to a variable
    let random_number = Math.floor(Math.random() * 3) + 1;

    // switch case to choose the desired output with the previously generated number
    switch(random_number) {
        // return rock if number = 1
        case 1: 
            return "Rock";
            break;
        // return paper if number = 2
        case 2:
            return "Paper";
            break;
        // return scissors if number = 3
        case 3:
            return "Scissors";
            break;
        // return an error if random fails
        // this case should never happen
        default:
            return "Error";
            break;
    }
}

// function to let the player choose a selection of either rock, paper or scissors
function playerSelection() {
    // failcheck if the input is NOT rock, paper or scissors
    let inputCheck = false;

    do {
        // open a prompt to let the player choose rock, paper or scissors
        let playerChoice = prompt("Please enter rock, paper or scissors: ");
        
        // transform the user input for comparison with computers choice
        // first letter uppercase
        // following letters lower case
        playerChoice = playerChoice.substring(0,1).toUpperCase() + playerChoice.slice(1).toLowerCase();

        // check if rock, paper or scissors is the input
        // there is no need to set failcheck "true", as return stops the function anyways
        if(playerChoice === "Rock")
            return playerChoice;
        else if(playerChoice === "Paper")
            return playerChoice;
        else if(playerChoice === "Scissors")
            return playerChoice;
        else {
            window.alert("Error! Wrong Input, try again!");
        }
        // if something else is entered, open prompt again
    } while(inputCheck === false);

    
}

// function to play a single round of rock, paper or scissors
// note that playerSelection here is a function parameter, not the previous function
function playRound(playerSelection, computerSelection) {

    // debug output of both selections
    console.log(playerSelection);
    console.log(computerSelection);

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

// function to start the complete game with multiple rounds
function game() {

    let result = "";

    for(let i = 0; i <= 4; i++) {
        result = playRound(playerSelection(), getComputerChoice());
        console.log(result);
    }


}