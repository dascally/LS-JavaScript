/*
function findLargestNumber(numberList) {
    return numberList.reduce((acc, x) => (x > acc) ? x : acc);
}
*/

let numberList1 = [1, 6, 3, 2];
let numberList2 = [-1, -6, -3, -2];
let numberList3 = [2, 2];

/*
console.log(findLargestNumber(numberList1));
console.log(findLargestNumber(numberList2));
console.log(findLargestNumber(numberList3));
*/

console.log(Math.max(...numberList1));
console.log(Math.max(...numberList2));
console.log(Math.max(...numberList3));
