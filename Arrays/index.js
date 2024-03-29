//@ REVERSE A STRING

const str = 'Kamran';

//1ST METHOD
console.log(str.split('').reverse().join(''));

//2ND METHOD

const arr = [];

for (i = str.length - 1; i >= 0; i--) {
  arr.push(str[i]);
}

console.log('Reversed string is :', arr.join(''));

// 3rd METHOD TAKING A sentence

const string = 'what is your name';

const revString = string.split(' ').reverse();
const finalReverse = [];
console.log(revString);

for (let i = 0; i < revString.length; i++) {
  let arr = revString[i];
  let arr2 = [];
  for (j = arr.length; j >= 0; j--) {
    arr2.push(arr[j]);
  }
  finalReverse.push(arr2.join(''));
}

console.log(finalReverse.join(' '));

//3.1 method taking a sentence

const string1 = 'uoy era woh olleh';
let stringSplit = string1.split(' ');
const stringRev = [];
const finalRev = [];

console.log(stringSplit);
for (i = stringSplit.length - 1; i >= 0; i--) {
  stringRev.push(stringSplit[i]);
}
for (let j = 0; j < stringRev.length; j++) {
  let reversed = [];
  let arr = stringRev[j];
  for (let k = arr.length - 1; k >= 0; k--) {
    reversed.push(arr[k]);
  }

  finalRev.push(reversed.join(''));
}

console.log(finalRev.join(' '));

//4@REMOVE DUPLICATES IN AN ARRAY
const array = [2, 5, 2, 6, 7, 8, 5, 2];

//4.1
const newArray = array.filter((val, ind, arr) => {
  return arr.indexOf(val) == ind;
});

console.log(newArray);

//4.2
let newarr2 = [];
for (i = 0; i < array.length; i++) {
  if (array.indexOf(array[i]) === i) {
    newarr2.push(array[i]);
  }
}

console.log(newarr2);

//4.3

const removeDuplicate = [...new Set(array)];

console.log(removeDuplicate);

//4.4   If there is duplicate in an array return true else return false
[1, 2, 2, 3, 4];

function duplicateCheck(num) {
  let data = new Set();
  for (let i = 0; i < num.length; i++) {
    if (data.has(num[i])) return true;

    data.add(num[i]);
  }
  return false;
}

console.log(duplicateCheck([1, 2, 3, 3]));

//@Check a number is palindrome or not

//5.1
const abc = 'dadu';

console.log('babu', abc.split('').reverse().join('') === abc);

//5.2
function checkPal(inp) {
  let arr = [];
  for (let i = inp.length - 1; i >= 0; i--) {
    arr.push(inp[i]);
  }
  return arr.join('') == abc;
}

console.log(checkPal(abc));

//5.3 to check a no is palindrome by reversing it    TC=O(1))

let num = 121;

function checkPalindrome(number) {
  let reverseNum = number.toString().split('').reverse().join('');
  console.log(reverseNum);

  let revNum = parseInt(reverseNum);
  return revNum === number;
}

console.log(checkPalindrome(num));

//5.4 Palindrome check by remainder and divider   TC= 0(N)  SC=O(1)

function palindromeCheck(num) {
  let reversedNum = 0;
  let rem;
  let temp = num;

  while (num > 0) {
    rem = num % 10;
    reversedNum = reversedNum * 10 + rem;
    num = Math.floor(num / 10);
  }
  return reversedNum === temp;
}

if (palindromeCheck(152)) {
  console.log('Its a Palindrome');
} else {
  console.log('Its not a Palindrome');
}

//6 @Anagram Check
//Input: s = "anagram", t = "nagaram".   or s = 'cat , t='car'      TC=0(N) SC=0(N)
// Output: true                          or :  false

function checkAnagram(s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};

  for (i = 0; i < s.length; i++) {
    if (obj1[s[i]]) {
      obj1[s[i]] += 1;
    } else {
      obj1[s[i]] = 1;
    }
    if (obj2[t[i]]) {
      obj2[t[i]] += 1;
    } else {
      obj2[t[i]] = 1;
    }
  }
  console.log(obj1);
  console.log(obj2);

  for (let val in obj1) {
    if (obj1[val] !== obj2[val]) return false;
  }
  return true;
}

console.log(checkAnagram('anagram', 'nagaram'));


//7 @To find secondLargest in an array arr[2,1,5,1,7,0,9]  op = 7   TC = O(N)  SC=O(1)

let checkSecondLargest = function (nums) {
  let largest = 0; // 2. , 5,  7 , 9
  let secondLargest = 0; // 0 , 1 ,2 ,5,7

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] !== largest && nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
};

console.log(checkSecondLargest([2, 1, 5, 1, 7, 0, 9]));


// 8  TWO SUM PROBLEM arr=[1,4,5,3,2],res=8   ans [2,3]

//8.1 Using nested for loop    TC= O(n2)  
let twoSum = function (num, res) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === res) return [i, j];
    }
  }
  return false;
};

console.log(twoSum([1, 4, 6, 7, 2], 5));


//8.2 Using Hash Map   TC=O(N)  SC = O(N)


let twoSum1 = function (num, res) {
  let obj = {};

  for (i = 0; i < num.length; i++) {
    if (obj[num[i]] >= 0) {
      return [obj[num[i]], i];
    }
    obj[res - num[i]] = i;
  }

  return false;
};

console.log(twoSum1([1, 4, 6, 7, 2], 13));

//8.3 Using indexOf

let twoSum2 = function (arr, target) {
  let diff;
  let index;
  for (let i = 0; i < arr.length; i++) {
    diff = target - arr[i];
    index = arr.indexOf(diff);
    if (index !== -1 && index !== i) return [i, index];
  }
};

console.log(twoSum2([1, 4, 6, 7, 2], 13));  



//9 @ Group Anagrams.  Input: strs = ["eat","tea","tan","ate","nat","bat"]    TC = O(N * NLOGN)
//.                   OutPut:[["bat"],["nat","tan"],["ate","eat","tea"]]      SC = 0(N)

let groupAnagram = function (strs){
  let hash= {};

  for(i=0 ; i<strs.length ; i++){
    let sorted = strs[i].split('').sort().join('');
    if(hash[sorted]){
      hash[sorted].push(strs[i])
    }
    else{
      hash[sorted] = [strs[i]]
    }
  }

  return Object.values(hash)
}

console.log(groupAnagram(["ate","bat","cat","dog","hog","ant","tan","tab","table"]));


//@10 TopKFrequent 


//10.1 Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
//Input: nums = [1,1,1,2,2,3], k = 2    TC={NLOGN}  SC=ON
//Output: [1,2]

let TopKFrequent = function(nums,k){
  let hash ={};
  let res = []

  for(let val in nums){
    hash[nums[val]] ? hash[nums[val]]++ : hash[nums[val]] = 1;
  }
 
  let sort = Object.entries(hash).sort((a,b)=> b[1]-a[1]).splice(0,k);

  for(let i in sort){
    res.push(parseInt(sort[i][0]))
  }

  return res;


  

}

console.log(TopKFrequent([1,1,1,2,2,3],2))


//10.2 TOP k FREQUENT using bucket sort


function topKFrequentt(nums, k) {
  let hash = {};
  let bucket = [];
  let res = [];

  for (let val in nums) {
    hash[nums[val]] ? hash[nums[val]]++ : (hash[nums[val]] = 1);
  }

  for (let num in hash) {
    if (bucket[hash[num]]) {
      bucket.push(parseInt(num));
    } else {
      bucket[hash[num]] = parseInt(num);
    }
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (res.length < k && bucket[i] !== undefined) {
      res.push(bucket[i]);
    }
  }
  return res;
}

console.log(topKFrequentt([1, 1, 1, 2, 2, 3], 2));

// 11 Product of an array except itself


// @ 11.1 using only one array
// arr   =  [1,  2,  3, 4]

// res =  [1,  1,  2, 6] product // 1 ,1,2,6

// res2   =  [24, 12, 8, 6]  product 1,4,12,24

let prodtuctExceptItself = function(nums){
  let res=[];
  let product = 1;

  for(i=0; i<nums.length ; i++){
    res[i] = product;
    product *= nums[i];
  }

  product=1;

  for(i=nums.length-1; i>=0 ; i--){
    res[i] *= product;
    product *= nums[i];
  }

  return res;
}

console.log(prodtuctExceptItself([1,2,3,4]));


//@11.2 using prefix and suffix
// arr   =  [1,  2,  3, 4]

// prefix =  [1,  1,  2, 6]

// suffix  =  [24, 12, 4, 1] // 1  4  12
// -----------------------
// res   =  [24, 12, 8, 6]

let product = function (nums){
  let res=[];
  let prefix =[];
  let suffix = [];
  let product=1;

  for(i=0; i<nums.length ; i++){
    prefix[i] = product;
    product *= nums[i];
  }
  
  product =1;
  for(i=nums.length-1 ; i>=0 ; i--){
    suffix[i] = product;
    product *= nums[i];
  }

  for (i=0 ; i<nums.length ; i++){
    res[i]= prefix[i]*suffix[i] ;
  }

  return res
}

console.log('baba',product([1,2,3,4]));


// @12 valid sudoku TC= O(n2)

let validSudoku = function (board){
  let row = new Set();
  let column = new Set();
  let box = new Set();

  for(i=0; i<9 ; i++){

    row.clear();
    column.clear();
    box.clear();
    for(j=0 ;j<9 ;j++){
      //checking for each row
        if((board[i][j]) !== '.'){
          if(row.has(board[i][j])) return false;
          row.add(board[i][j])
        }

        //checking for each column
        if(board[j][i] !== '.'){
          if(column.has(board[j][i])) return false;
          column.add(board[j][i])
        }

        //for each 3*3 box
        let boxValue = board[3*Math.floor(i/3) + Math.floor(j/3)] [3*(i%3)+(j%3)];
        console.log(board[3*Math.floor(i/3) + Math.floor(j/3)] [3*(i%3)+(j%3)])

        if(boxValue !== '.'){
          if(box.has(boxValue)) return false;
          box.add(boxValue);
        }
    }
    
  }
  return true;
}

console.log(validSudoku([
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","1",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))

// @13 longest consecutive sequence
//Input: nums = [100,4,200,1,3,2]
//Output: 4
//Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// 13.1 using BRUTE FORCE

let consecutiveIntegers = function(nums){
  let count =0;
  let max = 0;
    for(let i=0 ; i< nums.length ; i++){
      let value = nums[i];
       while(nums.indexOf(value) !== -1){
          count +=1 
          value += 1
          if(max <= count){
            max = count
          }
       }
       if (nums.indexOf(value) === -1) {
        count = 0;
      }
    }

    return max;
}

console.log(consecutiveIntegers([100,1,2,3,500,4,101,102,103,104,105,106,107]));


//13.2Using sorting an array
// [100,1,2,3,200,201,202,203,204,101,205]
// sorted [1,2,2,3,100,101,200,201,202,203,204,205]

    let consec = function (nums) {
      let sort = nums.sort((a, b) => a - b);
      let count = 1;
      let max = 0;
      for (let i = 0; i < nums.length; i++) {
        let val = sort[i];
        if (sort[i + 1] === val + 1) {
          count += 1;
          if (max <= count) {
            max = count;
          }
        } else if (sort[i + 1] == val) continue;
        else {
          count = 1;
        }
      }
    
      console.log(max);
    };


console.log(consec([100,1,2,3,200,201,202,203,204,101,205]))

//13.3 using map function tc O(n2)

let connsecInt = function (nums) {
  let map = new Map();

  for (let val of nums) {
    map.set(val, 1);
  }

  for (let i in nums) {
    if (map.has(nums[i] - 1)) {
      map.set(nums[i], 0);
    }
  }

  let max = 0;
  for (let val of nums) {
    if (map.get(val) === 1) {
      let count = 0;
      while (nums.indexOf(val) !== -1) {
        val += 1;
        count += 1;
        if (max <= count) {
          max = count;
        }
      }
    }
  }

  return max;
};

console.log(
  connsecInt([100, 1, 2, 3, 4, 200, 5, 201, 101, 102, 103, 104, 105, 106])
);


//13.4 optimized version tc =O(n)

function longestConsecutivee(nums) {
  const set = new Set(nums);
  let max = 0;

  for (const num of nums) {
    if (set.has(num + 1)) continue;

    let counter = 1,
      current = num;

    while (set.has(--current)) counter++;

    max = Math.max(counter, max);
  }

  return max;
}

console.log(longestConsecutivee([100, 1, 4, 2, 3, 5, 5, 6, 7, 8, 201, 202, 90]));

//@14 // Minimum Number of Steps to Make Two Strings Anagram
// You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.
// Example 1:

// Input: s = "bab", t = "aba"
// Output: 1
// Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
let minSteps = function (s, t) {
  let sHash = {};
  let tHash = {};
  let count = 0;

  for (let val in s) {
    sHash[s[val]] ? sHash[s[val]]++ : (sHash[s[val]] = 1);
    tHash[t[val]] ? tHash[t[val]]++ : (tHash[t[val]] = 1);
  }

  console.log(sHash, tHash);

  for (let i in sHash) {
    if (tHash[i] < sHash[i]) {
      count += sHash[i] - tHash[i];
    } else {
      if (!(i in tHash)) {
        count += sHash[i];
      }
    }
  }
  console.log(count);
};

console.log(minSteps('leetcode', 'practice'));