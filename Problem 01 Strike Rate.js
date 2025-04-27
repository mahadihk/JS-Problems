function calculateStrikeRate(runs, balls) {
    //Avoid if balls equals to zero
    if (balls === 0) {
        return 0.00;
    }
    let strikeRate = (runs / balls) * 100;

    // the strikerate.toFixed(2) returns a string representing the number with exactly 2 digits after the decimal point.
    // And that's why i used parseFloat() to turn it back into a number.
    return parseFloat(strikeRate.toFixed(2));
}

// Example I/O
console.log(calculateStrikeRate(45, 30));  // Output: 150.00
console.log(calculateStrikeRate(100, 60)); // Output: 166.67
console.log(calculateStrikeRate(25, 40));  // Output: 62.50