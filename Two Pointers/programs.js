// @ 1 valid palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.


//1.1 by reversing the string

const validPalindrome = function (s){
    let lowercaseString = s.toLowerCase();
    let desiredString = lowercaseString.replace(/[^a-z0-9]/gi ,'');
    let reverseString = desiredString.split('').reverse().join('');
    if(reverseString === desiredString) return true;
    return false;

}

console.log(validPalindrome('A man, a plan, a canal: Panama'));



//NOTE The replace() method will remove all non-alphanumeric characters from the string by replacing them with empty strings.
//  str.replace(/[^a-z0-9]/gi, '')

//   The forward slashes / / mark the beginning and end of the regular expression.
//   The square brackets [] are called a character class.
//The caret ^ symbol means "NOT the following". In our case, this means not any letter in the range of a-z and not any number in the range of 0-9.

//We used the g (global) flag because we want to match all occurrences of non-alphanumeric characters and not just the first occurrence.
// The i flag makes our match case-insensitive by targeting all uppercase and lowercase characters


// @ 1.2 By using two pointers

let validPlain = function (s) {
    let lowercaseString = s.toLowerCase();
  
    let desiredString = lowercaseString.replace(/[^a-z0-9]/gi, '');
  
    for (let i = 0, j = desiredString.length - 1; i <= j; i++, j--) {
      if (desiredString[i] !== desiredString[j]) return false;
    }
    return true;
  };
  
  console.log(validPlain('A man, a plan, a canal: Panama'));
  