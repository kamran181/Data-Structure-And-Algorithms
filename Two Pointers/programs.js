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
  


//@3 THREESUM          
//   Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]



//3.1 this does not fullfill for every combination of an array nums fot eg inp =[0,0,0,0] op [[0,0,0],[0,0,0]]  but the op should br [[0,0,0]]
let threeSums = function (nums) {
   let arr =[];
   if(nums.length<3) return arr;
   let result =0;
   let sortArr = nums.sort((a,b)=> a-b)

   for( let i=0 ; i<sortArr.length-2 ;i++){
    if(sortArr[i]=== sortArr[i-1]) continue;
    let j = i+1;
    let k = sortArr.length-1;
    while(j<k){
      let sum = sortArr[i] + sortArr[j] + sortArr[k]
      if(sum === result){
        arr.push([sortArr[i] , sortArr[j] , sortArr[k]]);
        j++;

      }
      if(sum>result){
        k--;
      }
      if(sum< result){
        j++;
      }
    }
   }
   return arr;
}


console.log(threeSums( [-1,0,1,2,-1,-4]));

//@3.2 Fullfills every combinations
var threeSum = function (nums) {
  const result = [];
  const target = 0;
  // we need 3 values for this to work
  // so return an empty array if we have less than 3
  if (nums.length < 3) {
    return result;
  }

  // sorting is ok because the function is already O(n^2)
  // and sort is O(nlogn)
  // this also lets us stop iterating once weve passed the target value
  nums = nums.sort((a, b) => a - b);

  // well use i as our anchor as we move through the array
  // we stop at nums.length - 2 to prevent undefined for k
  for (let i = 0; i < nums.length - 2; i++) {
    // because we sorted the array already
    // we can stop here if the current iterator is greater than the target value
    if (nums[i] > target) {
      break;
    }

    // if our iterator is the same as the previous value
    // skip it to prevent duplicate results
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // start j at i + 1
    let j = i + 1;

    // start k at end of array
    let k = nums.length - 1;

    // walking j and k towards each other to find all possible values
    // with i as our anchor value
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);

        // skip duplicate values of j and k
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        // move j and k inward
        j++;
        k--;
        continue;
      }
      if (sum < target) {
        j++;
        continue;
      }
      if (sum > target) {
        k--;
        continue;
      }
    }
  }
  return result;
};

console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));