//  Arrow Function 
// 1)- without arg and without rtn 
var say_somthing =  ()=>{
    console.log("Hello Everyone,Welcome to JS World!!😃");
}
say_somthing(); // calling //invoke

// console.log(say_somthing);
// ------------------------------------
// 2)- with arg and without rtn 
// var Addition =  (n1,n2)=>{  // perameter : n1,n2
//     console.log("Addition is : ",n1+n2);
// }
// Addition(12,13);// arg : 12,13

// var Addition =n1=>console.log("Addition is : ",n1);
// Addition(12);// arg : 12,13


//------------------------------------------
// 3)- without arg and with rtn 
var give_me_somthing = ()=>{return "Welcome to Third Function"};

// console.log(give_me_somthing());
var ans = give_me_somthing();
console.log(ans);

// 4)- with arg and with rtn     
var result =  (n)=>{
    if(n>=33)
    {
        return "You are pass.give me Party.😋";
    }
    else{
        return "You are Fail.Better luck Next Time.😥";
    }
}
var output = result(50);
console.log(output);


// console.log(typeof(()=>{}));




// -------------------------------------------
// (Name Function)
// // 2) wap to check given number is Perfect or Not. (using with arg and with rtn type)   //6    1,2,3 = 6   //28  = 1,2,4,7,14

// without arg and without rtn 
// // 3). Write a program in C to display the first n terms of the Fibonacci series.
        //- Fibonacci series 0 1 1 2 3 5 8 13 .....


// function Expression  
// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. 


// Function Arrow
// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g 
