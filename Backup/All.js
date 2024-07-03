// // ✅ Hello world program.

// //main screen
// // document.write("Hello");

// // document.write("<h1>Hello</h1>");


// //console screen  (Testing/ Debugging)
// // console.log("Hello");
// // // console.log("H");
// // console.log("\n\t<h1>aert</h1>");

// // \n : new line  \t : extra space 
// // console.time("Time");
// // console.log([1,2,3,4]);
// // console.table([1,13,2,3,4]);
// // console.error("This is an Error");
// // console.warn("This is a warning");
// // console.timeEnd("Time");


// ///////////////////////////////////////////////
// // ✅ Declare variable using var.
// // n1 = 12;
// // var s1 = "Zafar";
// // var c1 = 'c';
// // var Dhruv = true;
// // console.log(n1);
// // console.log(c1);
// // console.log(s1);
// // console.log(Dhruv);

// // Number : 1,2,1.2..................   2^53
// // Bigint : bigint
// // String : "asdfg",'s'
// // Boolean : true/false
// // undefined : undefined
// // object : object/array/set/map/null............
// // function : function

// ///////////////////////////////////////////
// // ✅ More about variable.
// // always start alphabet or _ or $ ..............
// // don't use space/comma/desh 
// // cammelCase
// // firstname   firstName
// /////////////////////////////////////////
// // ✅ Let.
// // ✅ Const.

// var n1 = 12;
// // n1=100;
// var n1 = 1000;
// console.log(n1);
// // we can re-initialization 
// // we can re-declaration

// let n2 = 13;
// // n2=200;
// // let n2 = 2000;
// console.log(n2);
// // we can re-initialization 
// // we cann't re-declaration

// const n3 = 14;
// // n3=300;// error
// console.log(n3);
// // we cann't re-initialization 
// we cann't re-dclaration
//////////////////////////////////////////
// ✅ String Indexing.
// collection of Multiple Char 
// Index based 
// String Similer to  Array but not same.

// var mystr = "";
// var mystr2 = '';
// var mystr3 = ``;
// console.log(typeof mystr);
// console.log(typeof mystr2);
// console.log( typeof mystr3);

// var str1 ="Royal aertyuio";
// //index    01234
// console.log(str1);
// console.log(str1[0]);
// console.log(str1[4]);

// // 1) length   (property)
// console.log(str1.length);
// console.log(str1[str1.length-1]);

// ✅ Useful string methods.

//Methods :
// var str1 ="Royal Technosoft pvt ltd";

// console.log(str1[13]);

// str1.charAt  : Returns the character at the specified index.
// console.log(str1.charAt(13));

// str1.charCodeAt : Returns the Unicode value of the character at the specified location. / NaN
// console.log(str1.charCodeAt(13));
// str1.concat : Returns a string that contains the concatenation of two or more strings.
// console.log(str1.concat(" Technosoft"," pvt"));
// console.log(str1 +" Technosoft");

// str1.endsWith
// console.log(str1.endsWith('l'));

// str1.includes
// console.log(str1.includes("Z"));

// str1.indexOf
// console.log(str1.indexOf('o'));

// // str1.lastIndexOf
// console.log(str1.lastIndexOf('o'));


// str1.replace
// console.log(str1.replace('oy',"O"));
// console.log(str1.replaceAll('o',"O"));


// str1.slice
// console.log(str1.slice(5,10));



// str1.split
// console.log(str1.split());
// console.log(str1.split(''));
// console.log(str1.split(' '));
// console.log(str1.split('o'));

// str1.startsWith
// console.log(str1.startsWith("r"));

// str1.substring
// console.log(str1.substring(10,5));
// // str1.toLowerCase
// console.log(str1.toLowerCase());
// // str1.toUpperCase
// console.log(str1.toUpperCase());
// // str1.trim
// console.log(str1.trim());
// // str1.trimEnd
// console.log(str1.trimStart());
// // str1.trimStart
// console.log(str1.trimEnd());
// // str1.substr
// console.log(str1.substr(5,10));

///////////////////////////
// ✅ Template Strings.
// var fname = "Ajay";
// var Age = 13;
// // "My name is Raj.and my age is 13."

// console.log(`My name is ${fname}.and my age is ${Age}.`);


//////////////////////////////////////////
// ✅ Null, undefined, BigInt, typeof.
// var n1 = null;
// console.log(typeof n1);

// var n1;
// console.log(typeof n1);

// var n1 = 12345678901234567890n;
// console.log(typeof n1);



/////////////////////////////////////////////////
// ✅ Booleans and Comparison Operator.
// Boolean  : true/false
// ==,<,<=,>,>=,!=,===,!==
// var n1 = 12;
// var n2 = 12;
// console.log(n1==n2);
// console.log(n1===n2);


///////////////////////////////////////
// ✅ Truthy and Falsy Values.
// Truthy Values  :
// true,1,-1,1.2,"z",[],{}
// Falsy values  :
// false,0,null,NaN,undefined,""


/////////////////////////////////////
// ✅ If else statement.
// ✅ Nested if else.
// ✅ If else if else.

// if()
// {
//     if(){

//     }
// }
// else if(){

// }
// else{

// }


/////////////////////
// ✅ Ternary Operator.
// (condition)? statement1 : statement2;

// var age = 5;
// var product = age<5 ? "Milk" : "Tea";
// console.log(product)
///////////////////////////
// ✅ && || operator.

// &&  both are true  then return true else return false.

// || both are false then return false else retrn true.

//////////////////////
// ✅ Switch statement.
// switch(choice)
// {
//     case 1 : statement1;
//             break;
//     case "Zafar" : statement2;
//             break;
//     default : statement3;
// }

/////////////////////////////
// ✅ While loop.
// ✅ While loop examples.
// variable initialization
// while(condition)
// {
//     code ;
// // variable inc/dec
// }
//////////////////////////////////////
// ✅ For loop.
// ✅ For loop examples.
// for(variable initialization;condition;inc/dec)
//     {
//         code;
//     }
//////////////////////////////////////
// ✅ Break and continue keyword.

// for (let i = 0; i <3; i++) {
//     for (let j = 0; j <3; j++) {
//         if(j==1)
//         {
//             continue;
//         }
//         console.log(i,j);
//     }
// }
//////////////////////
// ✅ Do while loop.
// variable initialization
// do{
//     code;
//     inc/dec;
// }while(condition);


// var i = 11;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

// for (let i = 11; i < 10; i++) {
//     console.log(i); 
// }