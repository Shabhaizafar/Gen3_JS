// - Clone array & spread operator.
// var Arr1 = [1,2,3,4,5,6,7,8,9];
// console.log(Arr1);

// 1) using concat : 
// var Arr2 = Arr1.concat(101,102,103);
// console.log(Arr2);


// Arr2.push(100);
// console.log(Arr1);
// console.log(Arr2);
////////////////////////////////////////
// 2) using slice :
// var Arr2 = Arr1.slice(2,7);
// console.log(Arr2);

// Arr2.push(100);
// console.log(Arr1);
// console.log(Arr2);

//////////////////////////////////
// 3) using spread operator   " ... "
// var Arr2 = [Arr1];
// console.log(...Arr2);
/////////////////////////////////////////////////////////////
var Arr = [11,14,1,6,2,4,90,20];
console.log(Arr);
//    - For loop. (Basic)

// for (let i = 0; i < Arr.length; i++) {
//    console.log(`Index : ${i},Value : ${Arr[i]}`);
// }

//    - While loop in array.
// var i = 0;
// while (i<Arr.length) {
//    console.log(`Index : ${i},Value : ${Arr[i]}`);
//     i++;
// }
/////////////////////////////
//    - For of loop.
// for (var value of Arr) {
//         console.log(value);
//     // if(iterator>=20)
//     //     {
//     //         console.log(iterator);
//     //     }
// }
//    - For in loop.

// for (const key in Arr) {
//     console.log(key,Arr[key]);
// }

//     -foreach Loop
// Arr.forEach(zafar => {
//     console.log(zafar);
// });
///////////////////////////////////////////////////

//    - use const for creating arrays.
//    - Array destructuring.
//////////////////////////////////////////////////////////////
// 1
// Basic For...of Loop

// Iterate through an array [1, 2, 3, 4, 5] and print each element.
// --------------------------------
// 2) 
// For...of with Arrays of Strings

// Iterate through an array ['apple', 'banana', 'cherry'] and print each fruit.
// -------------------------------------------------
// // 3)
// For...in with Arrays

// Iterate through an array [10, 20, 30, 40, 50] using for...in and print the index and value of each element.
// -----------------------------------
// 4)
// For...in with Arrays of Strings

// Given an array ['dog', 'cat', 'bird'], use for...in to print each index and the corresponding element.
// ----------------------------------
// 5)
// For...in with Nested Arrays

// Given a nested array [[1, 2], [3, 4], [5, 6]], use for...in to print the index and the sub-array at that index.
// -----------------
// 6)
// Basic forEach Loop

// Iterate through an array [1, 2, 3, 4, 5] using forEach and print each element.
// -------------------------------------
// 7)
// forEach with Callback Function

// Create an array of numbers [1, 2, 3, 4, 5] and use forEach to print each number squared.
// ---------------------------------
