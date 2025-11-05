function isNegativeZero(x) {
    return 1 / x === -Infinity;
}

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));
console.log(isNegativeZero(NaN));
