// - Default Parameters.


// function All(n=100){ // n=100 default parameter
//     console.log(n);
// }
// All();


// function All(n=100){ // n=100 default parameter
//     console.log(n);
// }
// All("Zafar"); //"Zafar" argument

// priority :    argument > default parameter.

// - Rest Parameters.
// var Arr = [11,12,13,14,15,16,17,20];

// function All(n1,n2,n3,...restparameters)
// {   
//     console.log(n1);
//     console.log(n2);
//     console.log(n3);
//     console.log(restparameters);
// }
// All(...Arr);


// function Add(n1,n2){
//     console.log(n1+n2);
// }
// Add(1,2,3);

// function Add(...rest){
//     var sum = 0;
//     for (const iterator of rest) {
//         sum+=iterator;
//     }
//     console.log(sum);
// }
// Add(1,2,3,4,5,6,7,8);

///////////////////////////////////////////
// ### Default Parameters:
// 1. Write a function `greet(name, greeting)` that takes a `name` and a `greeting` (both strings), and logs the greeting with the name. If no greeting is provided, default to "Hello".
   
// 2. Create a function `calculateArea(length, width)` that calculates the area of a rectangle. If only `length` is provided, assume it's a square and calculate the area accordingly.

// 3. Define a function `printMessage(message = "No message provided")` that prints a given message. If no message is provided, it should print "No message provided".

// 4. Implement a function `sum(a, b = 0)` that returns the sum of two numbers. If only one number is provided, assume the second number is 0.

// ### Rest Parameters:
// 5. Create a function `sumAll(...numbers)` that sums all the numbers passed to it as arguments and returns the result.

// 6. Define a function `multiply(multiplier, ...numbers)` that multiplies a given `multiplier` with all the numbers provided after it and returns an array of the results.

// 7. Write a function `mergeArrays(...arrays)` that merges multiple arrays into a single array and returns it.

// 8. Implement a function `logArguments(...args)` that logs all the arguments passed to it.

// ### Combined Practice:
// 9. Develop a function `calculateAverage(...numbers)` that calculates and returns the average of all the numbers passed to it. If no numbers are provided, return 0.

// 10. Write a function `formatDate(day, month, year = new Date().getFullYear())` that formats and returns a date string in `DD/MM/YYYY` format using the given day, month, and year parameters. If year is not provided, default to the current year.
