// => More useful things :-

//    - Iterables.
//    - Sets.
//    - Maps.
//    - Object.assign.
//    - Optional chaining.




//    - Iterables.
// var n1 = 12; // Not Iterables
// var n1 = true; // Not Iterables
// var n1 = "Zafar"; // Iterables
// var n1 = [1,2,3,4,5,6]; // Iterables
// var n1 = {
//     fname:"Raj",
//     lname : "Shah"
// };  // not Iterables

// for (const iterator of n1) {
//     console.log(iterator);
// }


//    - Optional chaining.   (?.)
var obj = {
    fname  : "Raj",
    lname : "Shah",
    // Address :{
    //     city : "GNR",
    //     nation : "India"
    // }
};


// console.log(obj);
// console.log(obj.lname);
// console.log(obj.Gender);// undifined


// console.log(obj.Address);
// console.log(obj.Address.city);// undefined



// console.log(obj.Address); // undefined
// // console.log(obj.Address.city);// error
// console.log(obj?.Address?.city);



// console.log("sertyu");

