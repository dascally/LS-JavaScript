function evenOrOdd(x) {
    if (!Number.isInteger(x))
        throw new TypeError("evenOrOdd: Input must be an integer.");

    console.log(x % 2 == 0 ? 'even' : 'odd');
}

evenOrOdd(42);
evenOrOdd(43);
evenOrOdd(43.5);
