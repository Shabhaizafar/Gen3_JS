//    - While loop.
//    - While loop examples.
//    - For loop.
//    - For loop examples.
//    - Do while loop.
//    - Break and continue keyword.


// Loop Control Statement : 
// 1) Entry Control Loop 
//     - for Loop
//     - while Loop 
// 2) Exit Control Loop 
//     - do-while Loop 


// ------------------------------------------------------------
//for Loop 
// for (let i = 0; i <=10; i++) {
//     console.log(i);
// }

// ------------------------------------
//while Loop 
// var i = 0; 
// while (i<=10){
//     console.log(i);
//     i++;
// }

// var i = 0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// ---------------------------------
// do-while Loop 
// var i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

// -------------------------
// n = 4

// *
// * *
// * * *
// * * * *

// -----------------------
// var n=4;
// var str ="";
// for (let i = 0; i < n; i++) {
//     str="";
//     for (let j = 0; j <=i; j++) {
//         str+="* ";
//     }
//     console.log(str);
// }

// A
// B C 
// D E F 
// G H I J 
// var n=4;
// var str ="";
// var ch = 65;
// for (let i = 0; i < n; i++) {
//     str="";
//     for (let j = 0; j <=i; j++) {
//         // str+=ch;
//         str = str + String.fromCharCode(ch)  + " ";
//         ch++;
//     }
//     console.log(str);
// }