

// Intro to arrays.
// Array is Collection of Multiple Data with same or diffrent datatype
// Array index based 
// int Arr[] = {1,2,3,4}
// var Arr = [1,2,32,1,,2,4,56,7,9];
//index    0 1 2
// console.log(Arr);
// var Arr2 = [1,2,"Royal"];
// console.log(Arr2);
// console.log(Arr[12]);

//property length : 
// console.log(Arr.length);

// console.log(Arr[Arr.length-1]);

// var Arr1 = [1,2,[1,2]];
// var Arr2 = [4,5,6];
// console.log(Arr1+Arr2); //1,2,34,5,6  //string    //1,2,1,24,5,6
////////////////////////////////////////////////////////////////
// ✅ 
//  Push  : Add new Element at last index ( Multiple Value possible)
//  pop : remove an Element  at Last index (not Possible for Multiple)
//  shift  : remove an Element  at First index (not Possible for Multiple)
//  unshift  : Add new Element at starting index(0) ( Multiple Value possible)

// var Arr = [1,2,3,4];
// console.log(Arr);
// Arr.push(100);
// Arr.push(100,200,300);
// console.log(Arr);

// Arr.pop();
// Arr.pop();

// Arr.shift();
// Arr.shift();

// Arr.unshift(100);
// Arr.unshift(100,200,300);
// console.log(Arr);

// delete Arr[0];
// console.log(Arr);
// console.log(typeof Arr[0]);





////////////////////////////////////////////
// ✅ Primitive vs reference data types.
//Primitive Data type : 
// Number,Boolean,String 

//Refference Datatype : 
//object,function

// var Arr = [1,2,3];



//////////////////////////////////////////
// ✅ Clone array & spread operator.

// 1) concat 

// var Arr1 = [1,2,3];
// var Arr2 = Arr1.concat(300,400,500);
// console.log(Arr1);
// console.log(Arr2);

// Arr1.push(100);
// console.log(Arr1);
// console.log(Arr2);

// 2)  slice  
// var Arr1 = [1,2,3,4,5,6,7,8,9,0];
// var Arr2 = Arr1.slice(3,9);

// console.log(Arr1);
// console.log(Arr2);

// 3) spread operator  ...
// var Arr1 =  [1,2,3,4,5,6,7,8,9,0];
// var Arr2 = [...Arr1];
// console.log(Arr1);
// console.log(Arr2);


/////////////////////////////////////////
// ✅ For loop.
// ✅ While loop in array.
// ✅ For of loop.
// ✅ For in loop.
// var Arr1 =  [1,2,3,4,5,6,7,8,9,0];
// console.log(Arr1);
// console.log(...Arr1);

//for basic 
// for (let i = 0; i < Arr1.length; i++) {
//     console.log("index : ",i,"value : ",Arr1[i]);
// }

//while loop 
// let i = 0;
// while (i<Arr1.length) {
//     console.log("index : ",i,"value : ",Arr1[i]);
//     i++;
// }

//do-while loop
// let i = 0;
// do {
//     console.log("index : ",i,"value : ",Arr1[i]);
//     i++;
// } while (i<Arr1.length);

//for of loop
// for (const iterator of Arr1) {
//     console.log(iterator);
// }
// for (const iterator of "Royal Techno") {
//     console.log(iterator);
// }

//for in loop 
// for (const key in Arr1) {
//         console.log("index : ",key,"value : ",Arr1[key]);
// }

//foreach loop
// Arr1.forEach(element => {
//     console.log(element);
// });

// ////////////////////////////////////////////
// ✅ use const for creating arrays.

// const Arr = [1,2,3];
// console.log(Arr);
// Arr.push(100);
// console.log(Arr);
// Arr = [];
// console.log(Arr);


/////////////////////////////////////////
// ✅ Array destructuring.

// const Arr1 =  [1,2,3,4,5,6,7,8,9,0];
// // console.log(Arr1[0]);

// var [v1,v2,,v3,...NewArr] = Arr1;

// console.log(v1);
// console.log(v2);
// console.log(v3);
// console.log(NewArr);

