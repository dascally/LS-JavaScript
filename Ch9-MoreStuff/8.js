function isNotANumber(value) {
    //return !(value <= Infinity);
    return value !== value;
}

/*
function isNotANumber(value) {
    return [NaN].includes(value);
}
*/

console.log(isNotANumber(NaN));
console.log(isNotANumber(1));
