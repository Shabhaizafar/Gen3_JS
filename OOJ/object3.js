var AllMethods = {
    greet : function (){
        console.log(`Hello,Your Name is ${this.Firstname} ${this.Lastname}.`);
    },
    hello : function (){
        console.log("Hello");
    }
}

function All(fname,lname){
    var user = Object.create(AllMethods);
    user.Firstname = fname;
    user.Lastname = lname;
    return user;
}

var obj5 = All("Raj","Shah");
var obj6 = All("Zafar","A");
console.log(obj5);
console.log(obj6);

obj5.greet();
obj6.greet();


obj5.hello();