function sumOfSquares(numbers) {
    return numbers.reduce((acc, x) => acc + x**2, 0);
}

let array = [3, 5, 7];

console.log(sumOfSquares(array));
