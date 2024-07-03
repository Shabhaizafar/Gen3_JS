//  Expression Function 
// 1)- without arg and without rtn 
var say_somthing =  function (){
    console.log("Hello Everyone,Welcome to JS World!!😃");
}
// say_somthing(); // calling //invoke

// console.log(say_somthing);
// ------------------------------------
// 2)- with arg and without rtn 
var Addition = function (n1,n2){  // perameter : n1,n2
    console.log("Addition is : ",n1+n2);
}
// Addition(12,13);// arg : 12,13

//------------------------------------------
// 3)- without arg and with rtn 
var give_me_somthing =function (){
    return "Welcome to Third Function";
}

// console.log(give_me_somthing());
var ans = give_me_somthing();
// console.log(ans);

// 4)- with arg and with rtn     
var result = function (n){
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