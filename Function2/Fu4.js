// parameter destructuring 
// function All(n1,n2,...restpara){
//     console.log(n1);
//     console.log(n2);
//     console.log(restpara);
//     var [value1,value2] = restpara;
//     console.log(value1);
//     console.log(value2);
// }
// All(1,2,3,4,5,6,7,8,9);


//////////////////////////////////////////////
// callback Function 
// function num(a,b){
//     // console.log("Num");
//     console.log(a+b);
// }

// function All(callback){
//     callback();
// }
// All(num);


// function All(callback){
//     var n1 = 12;
//     var n2 = 13;
//     callback(n1,n2);
// }
// All(num);


///////////////////////////////////////////
// ### Parameter Destructuring:
// 1. Write a function `sum` that takes an object `{ a, b }` as a parameter using destructuring and returns the sum of `a` and `b`.
// 2. Explain how you can use parameter destructuring to swap two variables `x` and `y` without using a temporary variable.
// 3. Create a function `printUser` that takes an object `{ name, age }` and logs `"Name: <name>, Age: <age>"` using destructuring in the function parameter.
// 4. Write a function `getFullName` that takes an object `{ firstName, lastName }` as an argument using destructuring and returns the full name as a string.
// 5. Implement a function `getConfig` that accepts an object `{ url, method }` and logs `"Request to <url> using method <method>"` using parameter destructuring.

// ### Callback Functions:
// 1. Create a function `multiply` that takes two parameters `x` and `y` and a callback function `callback`. Inside `multiply`, call the callback function with the result of `x * y`.
// 2. Implement a function `filterArray` that takes an array `arr` and a callback function `callback`. The callback function should return `true` or `false` based on some condition. `filterArray` should return a new array containing only the elements for which the callback function returns `true`.
// 3. Write a function `delayedGreet` that takes two parameters: `name` and `callback`. Inside `delayedGreet`, use `setTimeout` to call the callback function after 2 seconds with `"Hello, <name>!"`.
// 4. Explain the concept of a "higher-order function" and provide an example of a higher-order function that accepts a callback function as an argument.
// 5. Create a function `forEach` that takes an array `arr` and a callback function `callback`. `forEach` should call the callback function for each element in the array.

