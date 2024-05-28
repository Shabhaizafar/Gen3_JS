// // ✅ Intro to objects.
// A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.

// JavaScript is an object-based language. Everything is an object in JavaScript.

// JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.

// var Person = {
//     //key  + value       =    property
//     fname : "Raj",
//     lname : "Patel"
// }
// // How to Print Object Data
// console.log(Person);

// How to Access Property  Value
// 1) Dot Notation 
// console.log(Person.fname);
// 2) Bracket Notation 
// console.log(Person["lname"]);
// console.log(Person[`lname`]);
// console.log(Person['lname']);

////////////////////////////////////////////

//How to Modify Property Value 
// 1) Dot Notation 
// Person.fname = "Ajay";
// console.log(Person);
// 2) Bracket Notation 
// Person['lname'] = "Shah";
// console.log(Person);

/////////////////////////////////
// How to Add New Property
// 1) Dot Notation 
// Person.Gender = "Male";
// console.log(Person);
// 2) Bracket Notation 
// Person['Age'] = 12;
// console.log(Person);

//////////////////////////////////
// How to remove Property 
// // 1) Dot Notation 
// delete Person.fname;
// console.log(Person);
// // 2) Bracket Notation 
// delete Person["lname"];
// console.log(Person);

// //////////////////////////////////////////
// ✅ Dot vs Bracket Notation.
// var Person = {
//     "First Name" : "Raj",
//     lname : "Patel"
// }
// console.log(Person.First Name); // Not Workable
// console.log(Person["First Name"]);

/////////////////////////////////////////////////
// ✅ Iterate objects.
// var Person = {
//     fname : "Raj",
//     lname : "Patel",
//     Age : 12
// };
// console.log(Person);

// for (const key in Person) {
//    console.log(key,Person[key]);
// }

//Note  : Not Workable Any Other Loop.
//////////////////////////////
// ✅ Computed properties.
// var k1 = "email";
// var k2 = "Age";

// var v1 = "R@gmail.com";
// var v2 = 1;

// var Person = {
//     [k1] : v1,
//     [k2] : v2
// }
// console.log(Person);

/////////////////////////////
// ✅ Spread operator in objects. (clone Object)
var Person = {
    fname : "Raj",
    lname : "Patel",
    Age : 12
};
var Person2 = {...Person};
console.log(Person);
console.log(Person2);
Person2.Gender = "Male";
console.log(Person);
console.log(Person2);
///////////////////////////////////
// ✅ Object Destructuring.
// ✅ Objects inside Array.
// ✅ Nested Destructuring.
