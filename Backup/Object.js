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
// var Person = {
//     fname : "Raj",
//     lname : "Patel",
//     Age : 12
// };

// var Person2 = {...Person};
// console.log(Person);
// console.log(Person2);
// Person2.Gender = "Male";
// console.log(Person);
// console.log(Person2);
///////////////////////////////////
// ✅ Object Destructuring.
// var {lname,fname,...Newobj} = Person;
// console.log(lname);
// console.log(fname);
// console.log(Newobj);


/////////////////////////////////
// ✅ Objects inside Array.
// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];

// for (let i = 0; i < library.length; i++) {
//         console.log(i,library[i]);
//     }

// for (const iterator of library) {
//     console.log(iterator);
// }

// for (const key in library) {
//     console.log(key,library[key]);
// }

// console.log(...library);
//////////////////////////////////
// ✅ Nested Destructuring.
// var Person = {
//     fname : "Raj",
//     lname : "Patel",
//     Age : 12,
//     Address : {
//         city : "GNR"
//     }
// };

// var {Address:{city}} = Person;
// console.log(city);
///////////////////////////////////////////////////////
// // Create an Object

// // Create an object person with properties name (string), age (number), and city (string).

// var person = {
//     name : "Raj",
//     Age : 12,
//     city : "GNR"
// }
// console.log(person);
// ////////////////////////////////////////////
// // Accessing Properties

// // Given the person object, access and log the name and city properties.

// console.log(person.name);
// console.log(person["city"]);

// /////////////////////////////////////////////////////////////////////
// // Updating Properties

// // Update the age property of the person object to 30.
// // person.Age =30;
// // console.log(person);
// person["Age"] = 30;
// console.log(person);


//////////////////////////////////////////////////////////////
// Adding Properties

// Add a new property country with the value 'USA' to the person object.
// person.country = "USA";

// person["country"] = "USA";
// console.log(person);

//////////////////////////////////////////
// Deleting Properties

// Delete the city property from the person object.

// delete person.city;

// delete person["city"];
// console.log(person);

//////////////////////////////////////////////
// Advanced Object Operations
// Nested Objects

// Create an object company with a nested object address that has street, city, and zipcode properties.

// var company = {
//     cname : "ABC",
//     Address : {
//         street :1,
//         city : "ASDF",
//         zipcode : 1234
//     },
//     // p : 123
// }
// console.log(company);
// console.log(company.Address);
////////////////////////////////////////////
// Looping Through Properties

// Write a function that loops through the properties of an object and logs each key and value.
// for (const key in company) {
//     if(typeof company[key] == 'object')
//     {
//         for (const key2 in company[key]) {
//            console.log(key2,company[key][key2]);
//         }
//     }
//     else{
//         console.log(key,company[key]);
//     }
// }

/////////////////////////////////////////////
// Object Methods

// Add a method greet to the person object that logs "Hello, my name is [name]".
// var person = {
//     name : "Ajay",
//     Age : 12,
//     city : "GNR",
//     greet : function (){
//         console.log(`Hello,My name is ${person.name}`);
//     } 
// }
// person.greet()
////////////////////////////////
// Array of Objects

// Create an array people that contains multiple person objects with different properties.

var people = [
    {
        fname : "Raj",
        lname : "patel"
    },
    {
        fname : "Ajay",
        lname : "shah"
    }
]
// console.log(...people);

////////////////////////////////////////////////////////////////
// Finding Objects in Arrays

// Write a function that takes an array of person objects and a name, and returns the person object with that name.
// Object Destructuring

// Use destructuring to extract the name and age properties from the person object.
// Merging Objects

// Merge two objects obj1 and obj2 into a single object.
// Cloning Objects

// Create a deep clone of an object using a method of your choice (e.g., using Object.assign or JSON methods).
// Practical Applications
// Configuration Object

// Create a configuration object config with nested objects and arrays representing a complex configuration for a software application.
// Dynamic Property Names

// Use a variable to dynamically set a property name in an object.
// Computed Property Names

// Use computed property names to create an object with properties that are dynamically defined.
// Object.freeze()

// Use Object.freeze() to make an object immutable and demonstrate attempting to modify it.
// Prototype and Inheritance

// Create a constructor function for a Person and add methods using the prototype. Create an instance and demonstrate inheritance.
