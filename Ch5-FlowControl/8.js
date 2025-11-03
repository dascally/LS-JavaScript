function numberRange(x) {
    if (!Number.isInteger(x))
        throw new TypeError('numberRange: Input must be an integer.');

    if (x < 0)
        console.log(`${x} is less than 0`);
    else if (x <= 50)
        console.log(`${x} is between 0 and 50`);
    else if (x <= 100)
        console.log(`${x} is between 51 and 100`);
    else
        console.log(`${x} is greater than 100`);
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
