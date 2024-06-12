// ### Hello World Program
// 1. Write a program to print "Hello, World!" to the console.
// console.log("Hello, World!");
// 2. Modify the "Hello, World!" program to include your name in the greeting.
// var fname = "Raj";
// console.log("Hello, World!".slice(0,6)+fname);
// 3. Print "Hello, Universe!" to the console.
// console.log("Hello, Universe!");

//--------------------------------------
// ### Declare Variable Using `var`
// 1. Declare a variable using `var` and assign it a value. Reassign the value and print it.
// var n1; //declare
// n1=12; //assign
// console.log(n1);
// n1 = 100; //reassign
// console.log(n1);


// 2. Declare two `var` variables and swap their values.
// var n1 = 12;
// var n2 = 13;
// console.log("Before Swap : ",n1,n2);
// var temp = n1;
// n1 = n2;
// n2 = temp;
// console.log("After Swap : ",n1,n2);

// 3. Declare a `var` variable, reassign it within a function, and print it both inside and outside the function.
// var n1 = 12;
// console.log("Value of N1 Before Function : ",n1);
// function All(){
//     n1=100;
//     console.log("Value of N1 in inner Function : ",n1);
// }
// console.log("Value of N1 in Outer Function : ",n1);
// All();


// ### More About Variables
// 1. Declare variables using `var`, `let`, and `const`. Assign each a different value and print them.
// var n1 = 12;
// let n2 = 13;
// const n3 = 14;
// console.log(n1,n2,n3);

// 2. Try reassigning a `const` variable and observe the error.
// n3 = 133;  // Uncaught TypeError: Assignment to constant variable.

// 3. Declare a `let` variable inside a block and print it outside the block.
// {
//     let n1 = 13;
//     console.log(n1);
// }
// console.log(n1);  //ReferenceError: n1 is not defined


// 4. Create a `const` object and modify one of its properties.
// const obj = {
//     fname : "Raj",
//     lname :"Patel"
// }
// console.log(obj);
// obj.fname = "Ajay";
// obj['lname'] = "Shah";
// console.log(obj);

// 5. Declare a `let` variable, reassign it within a loop, and print it both inside and outside the loop.

// for (let i = 0; i < 5; i++) {
//     console.log(i);
    
// }
// console.log(i);  //ReferenceError: i is not defined

// for (var i = 0; i < 5; i++) {
//     console.log(i);
    
// }
// console.log(i); 
//////////////////////////////
// ### Hello World Program
// 1. Write a program to print "Hello, JavaScript!" to the console.
// 2. Modify the "Hello, World!" program to include your favorite quote.
// 3. Create a function that returns "Hello, Function!" and print its result.
// 4. Write a program to print "Hello, [Your City]!" to the console.
// 5. Print "Welcome to JavaScript programming!" to the console.

// ### Declare Variable Using `var`
// 1. Declare a `var` variable and initialize it with a number. Print the variable.
// 2. Declare a `var` variable and initialize it with a boolean. Print the variable.
// 3. Declare a `var` variable, initialize it with a string, and then change it to a number. Print the variable.
// 4. Declare multiple `var` variables in a single statement and print them.
// 5. Declare a `var` variable inside a function and print it both inside and outside the function.

// ### More About Variables
// 1. Declare a variable using `var` inside a function and print it outside the function.
// 2. Declare a variable using `let` inside a loop and print it outside the loop.
// 3. Declare a variable using `const` and try to change its value within a block scope.
// 4. Create an object with `const` and add a new property to it.
// 5. Declare a variable using `var` and try to redeclare it using `let` in the same scope.