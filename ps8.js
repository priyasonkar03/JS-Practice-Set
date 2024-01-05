/*Write a JavaScript program where the program takes
a random integer between 1 and 10, and the user is then 
prompted to input a guess number. The program displays a message "Good Work" 
if the input matches the guess number otherwise "Not matched"*/
/*
// Generate a random integer between 1 and 10 (inclusive)
var num = Math.ceil(Math.random() * 10);

// Log the generated random number to the console
console.log(num);

// Prompt the user to guess a number between 1 and 10 (inclusive)
var gnum = prompt('Guess the number between 1 and 10 inclusive');

// Check if the guessed number matches the generated random number
if (gnum == num)
    // Log a message if the guessed number matches the random number
    console.log('Matched');
else
    // Log a message if the guessed number does not match, and also provide the correct number
    console.log('Not matched, the number was ' + gnum); 
*/
const user = parseInt(prompt("Guess a number between 1 and 10"));
function userGuess(randomNumber){
    //const num= Math.floor(Math.random)*10+1;
    
    if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 10) {
        if (userGuess === randomNumber) {
            console.log("Good Work! Your guess is correct.");
        } else {
            console.log("Not matched. The correct number was: " + randomNumber);
        }
    } else {
        console.log("Please enter a valid number between 1 and 10.");
    }
}
console.log(userGuess(5));


//===============not completed
