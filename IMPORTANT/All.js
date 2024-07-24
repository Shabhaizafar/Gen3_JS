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



// Object.assign
// var obj = {
//     fname : "Raj",
//     lname : "Patel"
// };
// console.log(obj);

// var obj2 = Object.assign({},obj,{Age:13});

// console.log(obj2);
// console.log(obj);




// ✅ Sets. :   unique values 
var Arr = [11,12,13,14,15,11,12,13,14,"Zafar",true];
console.log(Arr);

var myset = new Set(Arr);


//add() :  Add single value at a time.
// myset.add(100,300);


//clear() : clear All Set values (empty set)
// myset.clear();
console.log(myset);


//delete() : delete Specific Value 
// myset.delete("Zafar");


// myset.entries();

// // Object Format  key value 
// console.log(myset.entries());

// // keys
// console.log(myset.keys());

// // values 
// console.log(myset.values());


//size of Set  : total number of Values
// console.log(myset.size);

// check the value exist or not in set
// console.log(myset.has("Royal"));


// Foreach Loop 
myset.forEach((v)=>{
    console.log(v);
});




// ✅ Maps.