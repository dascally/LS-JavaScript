function maybeAllCaps(text) {
    return (text.length > 10) ? text.toUpperCase() : text;
}

console.log(maybeAllCaps('Hello world!'));
console.log(maybeAllCaps('Goodbye.'));
