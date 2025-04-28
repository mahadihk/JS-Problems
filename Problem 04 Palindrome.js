function isPalindrome(str) {
    // Convert all characters to Lowercase
    str = str.toLowerCase();

    // Left = First character, right = Last character
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            // If characters don't match, it's not a palindrome
            return false; 
        }
        // If character matches, compare next character
        left++;  
        right--; 
    }
    // If all character matches, Its a Palindrome
    return true; 
}

// Example I/O
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("rotator")); // true
console.log(isPalindrome("peep"));    // true
