function oddLengths(arr) {
    return arr
        .map((str) => str.length)
        .filter((x) => (x % 2) === 1);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(oddLengths(arr));
