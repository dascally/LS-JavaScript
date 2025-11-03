const rlSync = require('readline-sync');

function multiply(a, b) {
    return a * b;
}

function promptForNumber(prompt) {
    return Number.parseFloat(rlSync.question(prompt));
}

let a = promptForNumber('Enter the first number: ');
let b = promptForNumber('Enter the second number: ');

console.log(`${a} * ${b} = ${multiply(a, b)}`);
