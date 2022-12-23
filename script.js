// global variables
let user_counter = 0;           // global var for user points
let computer_counter = 0;       // global var for computer points

// js query selectors for the buttons ids
const button_rock = document.querySelector('#rock');
const button_paper = document.querySelector('#paper');
const button_scissors = document.querySelector('#scissors');

// js get elements to dynamically change their content
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

// helper function to count the players points
function counter(winner) {

    // check who won the round and increment the players points
    if(winner === "Player Wins")
        user_counter++;
    else if(winner === "Computer Wins")
        computer_counter++;
    
    console.log(user_counter);
    console.log(computer_counter);
}

// adds an event listener for the users rock button click event
button_rock.addEventListener('click', () => {

    // display that the user selected rock
    user_selection_content.innerText = 'Rock';

    // we give the playRound function the users choice an the return of the computer generated choice function
    // we set the return of the playRound function to be the inner text of the winner selection content
    // we also use the return of playRound to access the counter function to count the players points
    counter(winner_selection_content.innerText = playRound("Rock", getComputerChoice()));

});

// adds an event listener for the users paper button click event
button_paper.addEventListener('click', () => {

    // display that the user selected paper
    user_selection_content.innerText = 'Paper';

    // we give the playRound function the users choice an the return of the computer generated choice function
    // we set the return of the playRound function to be the inner text of the winner selection content
    // we also use the return of playRound to access the counter function to count the players points
    counter(winner_selection_content.innerText = playRound("Paper", getComputerChoice()));

});

// adds an event listener for the users scissors button click event
button_scissors.addEventListener('click', () => {

    // display that the user selected scissors
    user_selection_content.innerText = 'Scissors';

    // we give the playRound function the users choice an the return of the computer generated choice function
    // we set the return of the playRound function to be the inner text of the winner selection content
    // we also use the return of playRound to access the counter function to count the players points
    counter(winner_selection_content.innerText = playRound("Scissors", getComputerChoice()));

});