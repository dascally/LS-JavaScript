function allMatches(strings, regex) {
    //return strings.filter(RegExp.prototype.test.bind(regex));
    return strings.filter((string) => regex.test(string));
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));
