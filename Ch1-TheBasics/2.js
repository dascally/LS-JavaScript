let num = 4936;

let ones = num % 10;

num = (num - ones) / 10;

let tens = num % 10;

num = (num - tens) / 10;

let hundreds = num % 10;

num = (num - hundreds) / 10;

let thousands = num % 10;

console.log(`thousands:\t${thousands}\n hundreds:\t${hundreds}\n tens:\t\t${tens}\n ones:\t\t${ones}`);
