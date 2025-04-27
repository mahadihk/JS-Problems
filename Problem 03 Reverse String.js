function reverseString(str) {
    // empty string which will store the result.
    let reversed = '';
    // Loop used for reverse the string
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example I/O
console.log(reverseString('hello'))      // output: olleh
console.log(reverseString('racecar'))    // output: racecar
console.log(reverseString('12345'))      // output: 54321
