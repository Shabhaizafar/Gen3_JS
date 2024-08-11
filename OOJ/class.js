class Person{
    constructor(fname,lname){
        this.firstname = fname;
        this.lastname = lname;
    };
    greet(){
        console.log(`Hello,Your Name is ${this.firstname} ${this.lastname}.`);
    };
    hello(){
        console.log("Hello");
    }
}


var obj5 = new Person("Raj","Shah");
var obj6 = new Person("Zafar","A");
console.log(obj5);
console.log(obj6);

obj5.greet();
obj6.greet();

obj5.hello();