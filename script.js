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
        // if something else is entered, open prompt again
        console.log(playerChoice);
    } while(inputCheck === false);

    
}