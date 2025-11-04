function oddLengths(strings) {
    return strings.reduce(
        (acc, str) => (str.length % 2 === 1) ? acc.concat(str.length) : acc,
        []
    );
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(oddLengths(arr));
