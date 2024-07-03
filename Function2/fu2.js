// // - global scope.
// // - Lexical Scope.
// // - Block Scope Vs Function Scope.


// // var v = 12;
// // function All(){
// //     var x = 13;
// //     console.log("Hello");
// // }

// //global scope
// let v = 12;

// //global
// console.log(v);

// //Block
// {
//     //block scope
//     let x = 100;
//     console.log(x);
// }
// // console.log(x);


// //function
// function All(){
//     let y = 1000;
//     console.log(y);
// }
// All();
// console.log(y);




///////////////////////////////
let n = 13;
function Main(){
    let n = 14;
    function inner(){
        console.log(n);
    }
    inner();
    console.log(n);
}
Main();


// 1. Write a program to demonstrate the use of global variables in JavaScript.
// 2. Create a function that declares a variable with function scope and demonstrate its usage.
// 3. Implement a nested function and access variables from both the inner and outer function scopes.
// 4. Write a program that demonstrates block scope using `let` and `const`.
// 5. Create a function that uses a closure to encapsulate variables in a lexical scope.
// 6. Implement a program that shows how variable hoisting works in JavaScript.
// 7. Write a program that uses arrow functions and demonstrates their lexical scoping behavior.
// 8. Create a function that modifies a global variable and observe its effects on other parts of the program.
// 9. Implement a program that showcases the scope chain in JavaScript by accessing variables defined in different nested scopes.
// 10. Write a program that uses `var`, `let`, and `const` in different scopes and observes their behavior (especially in loops and conditions).
