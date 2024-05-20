// Empty Object  :
// var myobj = {};


//How to Access (print) Object  : 
// var Person = {
// //    key    value =  property
//     fname : "Raj",
//     lname : "Patel",
//     Gender : "Male",
//     Age : 12
// };
// console.log(Person);


//How to Access Property value : 
// 1) dot notation ( . )
// console.log(Person.fname);
// // 2) Bracket Notation  ( [] )
// console.log(Person["lname"]);
// console.log(Person['lname']);
// console.log(Person[`lname`]);


//how to modify/update Property value
// 1) dot notation ( . )
// Person.fname = "Ajay";
// console.log(Person);

// 2) Bracket Notation  ( [] )
// Person["lname"] = "Shah";
// console.log(Person);

//how to Add new Property : 
// 1) dot notation ( . )
// Person.Location = "AMD";
// console.log(Person);
// 2) Bracket Notation  ( [] )
// Person["Location"] = "GNR";
// console.log(Person);

//how to remove Property
// 1) dot notation ( . )
// delete Person.Age;
// console.log(Person);

// // 2) Bracket Notation  ( [] )
// delete Person["lname"];
// console.log(Person);

// delete Person;  // invalid 
// console.log(Person);

/////////////////////////////////

//    - Dot vs Bracket Notation.

// var Person ={
//     "first name"  : "Raj",
//     Age : 12,
//     1 : 123456
// }
// console.log(Person."first name");
// console.log(Person["first name"]);

///////////////////////////////////////
//    - Iterate objects.
// var Person = {
// //    key    value =  property
//     fname : "Raj",
//     lname : "Patel",
//     Gender : "Male",
//     Age : 12
// };


//for loop Basic (Not working)
//for of Loop (Not Working)
//foreach (Not Working)

//for in 
// for (const key in Person) {
//     console.log(key,Person[key]);
// }
/////////////////////////////////////////
