function getComputerChoice() {
    // assign a random number from 1 to 3 to a variable
    let random_number = Math.floor(Math.random() * 3) + 1;
    // switch case to choose the desired output with the previously generated number
    // return rock if number = 1
    // return paper if number = 2
    // return scissors if number = 3
    console.log(random_number);
}