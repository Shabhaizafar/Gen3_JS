//    - Computed properties.   []

// var key1 = "fname";
// var key2 = "lname";

// var value1 = "Raj";
// var value2 = "shah";

// var myobj = {
//     [key1] : value1,
//     [key2] : value2 
// }
// console.log(myobj);

///////////////////////////////////////////////////////
//    - Spread operator in objects.  (Clone Object)
// var myobj = { 
//     fname : "Raj",
//     lname : "Shah",
//     Age : 12
// }
// console.log(myobj);

// var myobj2 = {...myobj};
// console.log(myobj2);

///////////////////////////
//    - Object Destructuring. 
// var myobj = { 
//     fname : "Raj",
//     lname : "Shah",
//     Age : 12,
//     gender : "Male",
//     Adress : "AMD"
// }
// console.log(myobj);

// // console.log(myobj.fname);


// var {fname:firstname,...newobj} = myobj;
// console.log(firstname);
// // console.log(Age);
// console.log(newobj);


////////////////////////////////
//    - Objects inside Array.
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

//    console.log(library[1]);

// for (let i = 0; i < library.length; i++) {
//     console.log(i,library[i]);
// }

// library.forEach(element => {
//     console.log(element);
// });

// for (const key in library) {
//     console.log(key,library[key]);
// }

// for (const iterator of library) {
//     console.log(iterator);
// }

// console.log(...library);
////////////////////////////////
//    - Nested Destructuring.

// var myobj = { 
//     fname : "Raj",
//     lname : "Shah",
//     Age : 12,
//     gender : "Male",
//     Add : {
//         city : "GNR",
//         state : "GUJ",
//         nation : "IND"
//     }
// }

// var {Add:{city}} = myobj;
// console.log(city);