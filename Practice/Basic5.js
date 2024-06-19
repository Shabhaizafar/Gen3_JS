// ### Booleans and Comparison Operators
// 1. Declare two boolean variables and use comparison operators to compare them.
// var n1 = true;
// var n2 = false;
// console.log(n1<n2);

// 2. Write expressions using `==`, `===`, `!=`, and `!==` operators.
// var n1= 12;
// var n2 = "12";
// console.log(n1==n2);//true
// console.log(n1===n2);//false
// console.log(n1!=n2);// false
// console.log(n1!==n2);// true


// 3. Use the `<`, `>`, `<=`, and `>=` operators to compare numbers.
// var n1 =12;
// var n2 = 13;
// console.log(n1<n2);
// console.log(n1>n2);
// console.log(n1<=n2);
// console.log(n1>=n2);

// 4. Write a function that checks if a number is between two other numbers.
// function All(n){
//     if(n>0 && n<100)
//         console.log("Number in given range");
// }
// All(110);

// 5. Compare strings using comparison operators and explain the results.
// var s = "Royal";
// var s2 = "Royal";
// console.log(s==s2);

// ### Truthy and Falsy Values
// 1. Write a function that takes a value and returns whether it is truthy or falsy.
// function All(n){
//     if(n){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(All(-12));

// 2. List out different values that are considered falsy in JavaScript.
//  false,0,"",null,undefined,NaN

// 3. Write a function that takes an array of values and returns an array of truthy values.
// var Arr = [1,2,3,4,"",undefined,null,"Royal"];

// function All(arr){
//     var newArr = [];
//     for (const iterator of arr) {
//         if(!iterator)
//             newArr.push(iterator);
//     }
//     return newArr;
// }
// console.log(All(Arr));

// 4. Check the truthiness of an empty object and an empty array.
// {} , []  true

// if([])
//     console.log("true")

// 5. Use a truthy value in an `if` statement to print a message.
// if(12)
//     console.log("true")


// ------------------------------------
// ### Booleans and Comparison Operators
// 1. Write a function that takes two numbers and returns `true` if the first is greater than the second.
// 2. Use `==` and `===` to compare `42` and `"42"`.
// 3. Write a function that takes two strings and returns `true` if they are equal.
// 4. Use `!=` and `!==` to compare `0` and `false`.
// 5. Write a function that checks if a number is within a range (10 to 20) using comparison operators.
// 6. Compare two boolean values using `==` and `===`.
// 7. Write a function that checks if a string contains only uppercase letters.
// 8. Use `<`, `<=`, `>`, and `>=` to compare two numbers and print the results.
// 9. Compare two arrays using `==` and `===` and explain the result.
// 10. Write a function that checks if a variable is a boolean using comparison operators.

// ### Truthy and Falsy Values
// 1. Write a function that returns `true` if a given value is truthy.
// 2. List all falsy values in JavaScript.
// 3. Write a function that filters out falsy values from an array.
// 4. Check the truthiness of an empty string and print the result.
// 5. Write a function that takes a value and returns a default value if it is falsy.
// 6. Check the truthiness of `0` and print the result.
// 7. Use an `if` statement to print a message only if a variable is truthy.
// 8. Write a function that checks if an object is empty (has no properties).
// 9. Check the truthiness of `NaN` and print the result.
// 10. Use logical `||` to assign a default value to a variable if another variable is falsy.
