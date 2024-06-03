// (Name Function)
// // 2) wap to check given number is Perfect or Not. (using with arg and with rtn type)   //6    1,2,3 = 6   //28  = 1,2,4,7,14
// function Perfect(n){
//     var sum = 0;
//     for (let i = 1; i<n; i++) {
//         if(n%i==0)
//         {
//             sum = sum + i;
//         }
//     }
//     if(n==sum)
//     {
//         return "Perfect";
//     }
//     else
//     {
//         return "Not a Perfect";
//     }    
// }
// var ans = Perfect(+prompt("Enter the Value of N : "));
// console.log(ans);


// without arg and without rtn 
// // 3). Write a program in C to display the first n terms of the Fibonacci series.
        //- Fibonacci series 0 1 1 2 3 5 8 13 .....


// function Fibonacci(){
//     var n = +prompt("Enter the Value of N : ");
//     var a = 0;
//     var b = 1;
//     var c;
//     var str = "";
//     for (let i = 1; i <=n; i++) {
//     str = str + a + ",";
//     c = a+b;
//     a=b;
//     b=c;
// }
// console.log(str);
// }
// Fibonacci();



/////////////////////////////////////////////////////////
// function Expression  
// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// var palindrome = function (str){
//     if(str.split('').reverse().join('')===str)
//     {
//         console.log("palindrome");
//     }
//     else{
//         console.log("Not a palindrome");
//     }
// }
// palindrome(prompt("Enter the Value of String : "));   
// ----------------------------
// var palindrome = function (str){(str.split('').reverse().join('')===str)?console.log("palindrome") :console.log("Not a palindrome");};palindrome(prompt("Enter the Value of String : "));   
// ----------------------------

// Function Arrow
// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g 

var str = 'java';
var Arr = [];
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
        Arr.push(str.substr(i,j+1));
    }
}
var mySet =new Set(Arr);
Arr = new Array(...mySet);

console.log(Arr.join(','));