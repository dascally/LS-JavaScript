function contains3(numbers) {
    return numbers.reduce((acc, x) => acc || x === 3, false);
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(`${numbers1} contains three? ${contains3(numbers1) ? 'Yes.' : 'No.'}`);
console.log(`${numbers2} contains three? ${contains3(numbers2) ? 'Yes.' : 'No.'}`);
console.log(`${numbers3} contains three? ${contains3(numbers3) ? 'Yes.' : 'No.'}`);
