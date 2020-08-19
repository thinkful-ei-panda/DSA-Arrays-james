/* eslint-disable no-console */

/* 5. URLify a string
A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

Input: tauhida parveen
Output: tauhida%20parveen

Input: www.thinkful.com /tauh ida parv een
Output: www.thinkful.com%20/tauh%20ida%20parv%20een */

function stringURL(string) {
  console.log(string.replace(/ /g, '%20'));
}

stringURL('tauhida parveen'); 
//expected: 'tauhida%20parveen'
//results:  'tauhida%20parveen'

stringURL('www.thinkful.com /tauh ida parv een'); 
//expected: 'www.thinkful.com%20/tauh%20ida%20parv%20een'
//results:  'www.thinkful.com%20/tauh%20ida%20parv%20een'


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

  console.log({ array: fiveOrMore, passes: pass });
}

removeLess5([1,10,3,22,5]); //{ array: [ 10, 22, 5 ], passes: 3 }


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
  console.log({passes: pass, MaxSum: prevMax});
}
  
maxSum([4, 6, -3, 5, -2, 1]); // { passes: 6, MaxSum: 12 }

