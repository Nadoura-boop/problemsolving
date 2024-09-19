    /*               problem (1)

Write a function that takes an array of numbers
and returns a new array containing only the even
numbers*/

var num =[1,2,3,4,5,6,7,8,9]


var even = num.filter(function(element)
{
    return element % 2 == 0
}
)
console.log(even)

   /*                problem (2)
Write a function that takes an array of numbers
and returns the largest number in the array*/

var nums=[100,200,400,700]
var largeNumber= LargestNumber(nums);
function LargestNumber(number) {
    return Math.max(...number);
  }
  console.log(largeNumber);




 /*                  problem (3)
 Write a function that takes a string as input and
returns the same string but reversed.*/


 function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString('Nader elsayed'))




  /*                problem (4)
  Write a function that takes an array of numbers
  and returns a new array without duplicate numbers.*/

  var num4=[1,1,1,5,5,7,2,2,0]

  function removeDuplicate(array){
    return [...new Set(array)];
  }
  console.log( removeDuplicate(num4))

  
 

