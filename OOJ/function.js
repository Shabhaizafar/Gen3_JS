//call,apply,bind 


// function Hello(){
//     console.log("Hello");
// }

// Hello();

// Hello.call();
// Hello.apply();
// var ans = Hello.bind();
// ans();

var obj1 = {
    fname : "Raj",
    lname : "Shah",
    greet : function (hobby1,hobby2){
        console.log(`Hello My Name is ${this.fname} ${this.lname}. my Hobbies ${hobby1} ${hobby2}`);
    }
}

var obj2 = {
    fname : "Ajay",
    lname : "Patel"
}
console.log(obj1);
console.log(obj2);

// obj1.greet();


// call
obj1.greet.call(obj2,"Cricket","Football");
// obj1.greet.call(obj1);

//apply 
obj1.greet.apply(obj2,['Cricket',"Football"]);
// obj1.greet.apply(obj1);


//bind
var ans1 = obj1.greet.bind(obj2,"Cricket","Football");
// var ans2 = obj1.greet.bind(obj1);
ans1();
// ans2();

/////////////////////////
// Object Father  : fname ,lname ,property

// Object Child :  cname 



// calling : 
// father property :   "My name is cname fname lname."


// apply :


// bind  : 