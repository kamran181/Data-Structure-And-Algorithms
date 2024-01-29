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
  

  // @2 Two Sum II - Input Array Is Sorted

  let twoSum = function(numbers ,target){
    let leftPointer =0;
    let rightPointer = numbers.length-1;

    while(leftPointer < rightPointer){
      if(numbers[leftPointer]+numbers[rightPointer]>target){
        rightPointer -= 1
      }
      if(numbers[leftPointer] + numbers[rightPointer] <target){
        leftPointer += 1
      }
      if(numbers[leftPointer] + numbers [rightPointer] === target){
        return [leftPointer +1, rightPointer+1]
      }
    }
  }

  console.log(twoSum( [1, 3, 4, 5, 7, 11], 9));

  //@2.1
  function twoSum2(numbers, target) {
    for (let start = 0, end = numbers.length - 1; start < end; ) {
      let sum = numbers[start] + numbers[end];
      if (sum === target) return [++start, ++end];
      else sum > target ? end-- : start++;
    }
  }
  console.log(twoSum2( [1, 3, 4, 5, 7, 11], 9));
  //@2.2

  const twoSum3 = (numbers, target) => {
    let p1 = 0;
    let p2 = numbers.length - 1;
  
    while (numbers[p1] + numbers[p2] !== target) {
      if (numbers[p1] + numbers[p2] > target) {
        p2--;
      } else {
        p1++;
      }
    }
  
    return [p1 + 1, p2 + 1];
  };
  console.log(twoSum3( [1, 3, 4, 5, 7, 11], 9));
  