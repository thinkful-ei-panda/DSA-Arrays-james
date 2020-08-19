/* eslint-disable no-console */

/* 5. URLify a string
A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

Input: tauhida parveen
Output: tauhida%20parveen

Input: www.thinkful.com /tauh ida parv een
Output: www.thinkful.com%20/tauh%20ida%20parv%20een */

function stringURL(string) {
  let pass = 0;
  let final = string.replace(/ /g, '%20');
  pass++;

  console.log({'passes': pass, 'result': final});
}

stringURL('tauhida parveen'); 
//{ passes: 1, result: 'tauhida%20parveen' }

stringURL('www.thinkful.com /tauh ida parv een'); 
//{ passes: 1, result: 'www.thinkful.com%20/tauh%20ida%20parv%20een' }


////////////////////////////////////////////////////////////////////////
/* 6. Filtering an array
Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch. */

function removeLess5(numbers) {
  let fiveOrMore = [];
  let pass = 0;

  numbers.forEach(num => {
    if(num >= 5) {
      fiveOrMore.push(num);
      pass++;
    }
  });

  console.log({ 'result': fiveOrMore, 'passes': pass });
}

removeLess5([1,10,3,22,5]); //{ result: [ 10, 22, 5 ], passes: 3 }


////////////////////////////////////////////////////////////////////////
/* 7. Max sum in the array
You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

Input: [4, 6, -3, 5, -2, 1]
Output: 12 */

function maxSum(integers) {
  let currMax = 0;
  let prevMax = 0;
  let pass = 0;
  
  for(let i = 0; i < integers.length; i++){
    pass++;  
    currMax = Math.max(0, currMax + integers[i]);
    prevMax = Math.max(currMax, prevMax);
  }

  console.log({'passes': pass, 'result': prevMax});
}
  
maxSum([4, 6, -3, 5, -2, 1]); //{ passes: 6, result: 12 }


////////////////////////////////////////////////////////////////////////
/* 8. Merge arrays
Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11] */


function mergeAndSort(arr1, arr2) {
  const finalArr = Array.from(arr1);
  let pass = 0;

  arr2.forEach((num) => {
    let i = 0;
    while(i < finalArr.length) {
      if(num <= finalArr[i]) {
        finalArr.splice(i, 0, num);
        break;
      }
      i++;
      pass++;
    }
  });

  console.log({ 'result': finalArr, 'passes': pass });
}

mergeAndSort([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]); 
//{result: [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11], passes: 30}



////////////////////////////////////////////////////////////////////////
/* 9. Remove characters
Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny' */

function removeChar(string, char) {
  let final = ' ';
  let prev = 0;
  let pass = 0;

  for (let i = 0; i <= string.length; i++) {
    if (char.includes(string[i]) || i === string.length) {
      final += string.slice(prev, i);
      prev = i + 1;
    }
    pass++;
  }

  console.log({'passes': pass, 'result': final});
}

removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');
//{ passes: 40, result: ' Bttl f th Vwls: Hw vs. Grzny' }


////////////////////////////////////////////////////////////////////////
/* 10. Products
Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27] */

function productOfArrIndex(numbers){
  let newArr = [];
  let pass = 0;

  for(let num of numbers){
    let product = 1;
    numbers.filter(x => x !== num).forEach(x => product *= x);
    newArr.push(product);
    pass++;
  }
  
  console.log({'result': newArr, 'passes': pass});
}

productOfArrIndex([1, 3, 9, 4]); 
//{ result: [ 108, 36, 12, 27 ], passes: 4 }


////////////////////////////////////////////////////////////////////////
/* 11. 2D array
Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

Input:
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]]; */



////////////////////////////////////////////////////////////////////////
/* 12. String rotation
Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

Input: amazon, azonma
Output: False

Input: amazon, azonam
Output: true
*/

