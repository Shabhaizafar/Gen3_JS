// what is a Function : 
// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).
/*
In C
// //Function Declaration
// void Hello();

// void main(){
//     //Function Calling
//     Hello();

// }
// //Function Initialization
// void Hello(){
//     printf("Hello");
// }
*/

/*
In JS : 
//function Declaration/intilization
function function_name(){
    code;
}

// function_name(); //function Calling // function invoke
*/
//////////////////////////////////////////////////////////////////////
// Type of Function in JS : 
// 1) Name Function 
    // - without arg and without rtn 
    // - with arg and without rtn 
    // - without arg and with rtn 
    // - with arg and with rtn 
// 2) Expression Function
    // - without arg and without rtn 
    // - with arg and without rtn 
    // - without arg and with rtn 
    // - with arg and with rtn 
// 3) Arrow Function 
    // - without arg and without rtn 
    // - with arg and without rtn 
    // - without arg and with rtn 
    // - with arg and with rtn 
// 4) Anonymous Function
// 5) IIFE Function 
    // - without arg and without rtn 
    // - with arg and without rtn 
    // - without arg and with rtn 
    // - with arg and with rtn 
// 6) Generator Function 
// 7) recursive Function 
// 8) callback Function
// 9) Higher-order Function 
// 10)getter-setter Function
/////////////////////////////////////////////////////////////
//  Name Function 
// 1)- without arg and without rtn 
//declaration or initialization
function say_somthing(){
    console.log("Hello Everyone,Welcome to JS World!!😃");
}
// say_somthing(); // calling //invoke
// ------------------------------------
// 2)- with arg and without rtn 
function Addition(n1,n2){  // perameter : n1,n2
    console.log("Addition is : ",n1+n2);
}
// Addition(12,13);// arg : 12,13

//------------------------------------------
// 3)- without arg and with rtn 
function give_me_somthing(){
    return "Welcome to Third Function";
}

// console.log(give_me_somthing());
// var ans = give_me_somthing();
// console.log(ans);

// 4)- with arg and with rtn     
function result(n){
    if(n>=33)
    {
        return "You are pass.give me Party.😋";
    }
    else{
        return "You are Fail.Better luck Next Time.😥";
    }
}
var output = result(5);
// console.log(output);