const rlSync = require('readline-sync');

function askForInput(prompt) {
    return rlSync.question(prompt);
}

let firstName = askForInput("What's your first name? ");
let lastName = askForInput("What's your last name? ");

console.log(`Hello, ${firstName} ${lastName}!`);
