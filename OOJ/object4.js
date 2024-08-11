// Prototype Based Function  // constructor Function

function All(fname,lname){
    var user = Object.create(All.prototype);
    user.Firstname = fname;
    user.Lastname = lname;
    return user;
}

All.prototype = {
    greet : function (){
        console.log(`Hello,Your Name is ${this.Firstname} ${this.Lastname}.`);
    },
    hello : function (){
        console.log("Hello");
    }
}


var obj5 = All("Raj","Shah");
var obj6 = All("Zafar","A");
console.log(obj5);
console.log(obj6);

obj5.greet();
obj6.greet();

obj5.hello();