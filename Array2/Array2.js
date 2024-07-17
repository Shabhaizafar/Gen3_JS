// => Very Important Array Methods :-

//    - Sort.  -> sorting 
// const Arr = [29,24,56,22,21,26];
// console.log("Before Sorting :",Arr);

// Arr.sort();
// console.log("After Sorting :",Arr);


// var newArr = [1,111,10001,101,100001,1000001];
// console.log("Before Sorting :",newArr);
// // newArr.sort();

// newArr.sort((a,b)=>{return a-b}); //acending
// newArr.sort((a,b)=>{return b-a}); //decending

// console.log("After Sorting :",newArr);

/////////////////////////////////////////////////
//    - Every.  --> overAll
// const Arr = [29,24,56,22,21,26];
// console.log(Arr);
// var ans = Arr.every((a)=>{
//     return a>21;
// });
// console.log(ans);


//    - Some.   --> any single
// const Arr = [29,24,56,22,21,26];
// console.log(Arr);

// var ans = Arr.some((a)=>{
//     return a>92;
// });
// console.log(ans);

//////////////////////////////////////////
var Arr = [11,14,12,19,18,15,20];

//    - Foreach method.
//     //v = value / i = index / a = Array
// var ans = Arr.forEach((v,i,a)=>{
//     return v;
// });
// console.log(ans);


//    - Fill method.
// Arr.fill(0);
// Arr.fill(0,2);
// 0 :fill   2 : starting index  5 : ending index
// Arr.fill(0,2,5);


// console.log(Arr);
////////////////////////////
//    - Find.

// var ans = Arr.find(
//     (v)=>{
//         return v==20;
//     }
// );
// console.log(ans);





// sort() Method:
// Sorting Numbers: Write a function to sort an array of numbers in ascending order using the sort() method.

// Sorting Strings: Sort an array of strings alphabetically (case-sensitive).

// Custom Sorting: Sort an array of objects based on a specific property (e.g., age, name).

// Reverse Sorting: Sort an array of numbers in descending order using sort().
////////////////////////////
// Check Array of Numbers: Write a function that checks if all elements in an array are numbers using the every() method.

// String Length Check: Verify if all strings in an array have a length greater than 3.

// Divisibility Check: Determine if all elements in an array of numbers are divisible by 2.
//////////////////////////
// Check for Even Numbers: Write a function that checks if there are any even numbers in an array using the some() method.

// String Starting with Specific Letter: Determine if there is any string in an array that starts with the letter 'A'.

/////////////////////////////////////////////////////////

// / 1. **Find:**
//    - Write a function `findEvenIndex` that takes an array of integers and returns the index of the first even number using `Array.prototype.find`. If no even number is found, return `-1`.

// 2. **Fill:**
//    - Create an array of 5 elements and use `Array.prototype.fill` to replace all elements with a specific value (e.g., `'filled'`).
// 5. **Find:**
//    - Create a function `findPrime` that takes an array of integers and returns the first prime number using `Array.prototype.find`. If no prime number is found, return `null`.

// 6. **Fill:**
//    - Initialize an array of 8 elements with the numbers from 1 to 8 using `Array.prototype.fill` and a callback function.
// 9. **Find:**
//    - Implement a function `findLongestWord` that takes an array of strings and returns the longest word using `Array.prototype.find`. If there are multiple longest words, return the first one found.

// 10. **Fill:**
//     - Create an array of 10 elements and use `Array.prototype.fill` to replace all elements with the numbers from 1 to 10.



///////////////////////////////////////
// var Arr = [1,2,3,4,5,6,7,8,9,10];
// //    - Filter.
// var ans =  Arr.filter((v)=>{
//     return v<=15;
// });
// console.log(ans);


//    - Splice method.
// var deletedValue =  Arr.splice(2,3);
// console.log(Arr);
// console.log(deletedValue);


//    - Reduce.
// var ans = Arr.reduce(
//     (previousvalue,currentvalue)=>{
//         // console.log(previousvalue,currentvalue);
//         return previousvalue+currentvalue;
// });
// console.log(ans);


//    - Map method. 
// var Arr = [
//     {fname:"Raj",Age:15},
//     {fname:"Ajay",Age:14},
//     {fname:"Vijay",Age:20},
//     {fname:"sw",Age:10},
//     {fname:"R",Age:7}
// ];

// var ans =  Arr.map(
//     (v)=>{
//         if(v.Age>10)
//         {
//             return v;
//         }
//     }
// );
// console.log(ans);


// 1. **Sum of Array**: Calculate the sum of all numbers in an array using `reduce`.
   
// 2. **Filter Odd Numbers**: Filter out all odd numbers from an array using `filter`.
   
// 5. **Remove First Element**: Remove the first element of an array using `splice`.
   
// Double the Numbers: Given an array of numbers, create a new array where each number is doubled.

// Example:
// Input: [1, 2, 3, 4]
// Output: [2, 4, 6, 8]


// var Arr = [1,2,3,4,5,6];
// var ans =  Arr.forEach((v)=>{
//     // console.log(v*v);
//     return v*v;
// });
// console.log(ans);

// var ans =  Arr.map((v)=>{
//     // console.log(v*v);
//     return v*v;
// });
// console.log(ans);


// var Arr = [1,2,3,4,5,6];

// Arr.fill(0,1,5);

// console.log(Arr);