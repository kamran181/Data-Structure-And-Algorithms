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

//5.3 to check a no is palindrome by reversing it    TC=O(1)

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