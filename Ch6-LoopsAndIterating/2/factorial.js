/*
function factorial(n) {
    if (!Number.isInteger(n))
        throw new TypeError('factorial: Input must be a positive integer.');
    if (n <= 0)
        throw new RangeError('factorial: Input must be a positive integer.');

    return (n === 1) ? 1 : n * factorial(n - 1);
}
*/

function factorial(n) {
    if (!Number.isInteger(n))
        throw new TypeError('factorial: Input must be a positive integer.');
    if (n <= 0)
        throw new RangeError('factorial: Input must be a positive integer.');

    let result = 1;

    for (let i = result; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
