// 5) IIFE Function 
// IIFE Function  : Imidiate Invoked Function Expression

// - without arg and without rtn 
// (
//     function (){
//         console.log("Hello Everyone");
//     }
// )();

// (
//     function (){
    //         console.log("Hello Everyone");
    //     }
    // )();
// ------------------------ 
// - with arg and without rtn 

// (
//     function (n){  //n perameter
//         console.log(n);
//     }
// )(12); // 12 arg

// ------------------------
// - without arg and with rtn 
// var ans = (
    //     function (){
        //         return "Hello";
//     }
// )();

// console.log(ans);
// -------------------------------
// - with arg and with rtn 
// var output =  (
//     function(n1,n2){
//         return n1+n2;
//     }
// )(+prompt("Enter the Value of N1"),+prompt("Enter the Value of N2"));

// console.log(output);

// -------------------//

// 6) Generator Function 


// function All(){
//     console.log(1+2);
//     console.log(1-2);
//     console.log(1*2);
//     console.log(1/2);
// }
// All();

/*
valid
// 1) 
function *FunctionName(){

}
// 2) 
function* FunctionName(){

}
// 3)
function*FunctionName(){
    
}
*/
// function All(){
//     var n1 = +prompt("Enter the Value of N1 :");
//     var n2 = +prompt("Enter the Value of N2 :");
//     return n1+n2;
// }
// function *Numbers(){
//     yield 1;
//     yield 2;
//     yield All();
//     yield 4;
//     yield 5;
// }

// var Ans = Numbers();
// console.log(Ans.next().value);//1
// console.log(Ans.next().value);//2
// console.log(Ans.next().value);//3
// console.log(Ans.next().value);//4
// console.log(Ans.next().value);//5
// console.log(Ans.next().value);//undefined


// console.log(Ans.next().value);//1
// console.log(Ans.next().value);//2
// console.log(Ans.next().value);//3
// console.log(Ans.next().value);//4
// console.log(Ans.next().value);//5
// console.log(Ans.next().value);//undefined




// IIFE 
// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// var mystr = "webmaster";

// var ans = (
//     function (str){
//         return str.split('').sort().join('');
//     }
// )(mystr);

// console.log(ans);



// IIFE  Function : 
// return array  
//value : 1 to n =5
//[1,2,3,4,5]