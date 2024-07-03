
// ### `let`
// 1. Declare a variable using `let`, assign it a value, then change the value.
// let n1;//declare
// n1 = 12;//assign
// console.log(n1);
// n1 = 100;//reassign
// console.log(n1);


// 2. Create a block scope using `{}` and declare a `let` variable inside it. Try accessing it outside the block.

// {
//     let n1 = 12;
//     console.log(n1);
// }
// console.log(n1);  //ReferenceError: n1 is not defined


// 3. Use a `let` variable in a `for` loop and print its value inside and outside the loop.
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

// 4. Declare a `let` variable inside a function and try accessing it outside the function.
// function All(){
//     let  n1= 12;   
// }
// All();
// console.log(n1);
// {
//     let v =13;
//     }
// console.log(v);
// 5. Use a `let` variable to hold a counter in a while loop and print the counter value after the loop.
// var i = 0;
// while (i<5) {
//     let counter = 0;
//     counter+=i;
//     i++;
// }
// console.log(counter);

// ### `const`
// 1. Declare a variable using `const` and assign it a value. Try changing the value and observe the error.
// const n1; //error
// const n1=12;
// console.log(n1);
// n1 = 15; //TypeError: Assignment to constant variable.
// console.log(n1);


// 2. Declare an array or object with `const` and modify its contents.
// const Arr = [1,2,3,4]; //address
// // console.log(Arr);
// Arr = [1,2,3];
// Arr[0] = 100;
// console.log(Arr);

// 3. Create a `const` object with nested properties and modify one of the nested properties.
const obj = {
    fname : "Raj",
    Address : {
        city : "GNR",
        nation : "India"
    }
}
obj.Address.city = "AMD";
console.log(obj.Address.city);
// 4. Declare a `const` variable inside a function and try reassigning it inside the function.
// 5. Use `const` to declare a configuration object and access its properties in different functions.


// ### String Indexing
// 1. Create a string and access each character using its index.
// 2. Write a function that returns the first and last character of a string.
// 3. Access the middle character of a string.
// 4. Write a function that takes a string and an index and returns the character at that index.
// 5. Iterate through a string and print each character on a new line.

// ### Useful String Methods
// 1. Use the `length` property to find the length of a string.
// 2. Convert a string to uppercase and lowercase.
// 3. Trim the whitespace from a string.
// 4. Find the position of a substring within a string.
// 5. Replace a part of a string with another string.
// 6. Split a string into an array of words.
// 7. Concatenate two strings.
// 8. Check if a string starts with a specific substring.
// 9. Check if a string ends with a specific substring.
// 10. Repeat a string multiple times.



// ### `let`
// 1. Declare a `let` variable and initialize it with your age. Print the variable.
// 2. Declare a `let` variable and initialize it with the current year. Print it and then update it to next year.
// 3. Use a `let` variable inside a `for` loop to count from 1 to 5.
// 4. Declare a `let` variable inside an `if` block and try to access it outside the block.
// 5. Use `let` to declare a variable that holds an array and modify the array.
