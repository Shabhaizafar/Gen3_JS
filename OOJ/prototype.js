//proto :   
// syntax : __proto__

console.log("Before __proto__   in Object : ");
var obj1 = {
    key1 : "Value1",
    key2 : "Value2"
}

var obj2 = {
    key3 : "Value3"
}

console.log(obj1);
console.log(obj2);
console.log(obj1.key1); //Value1
console.log(obj2.key3); //Value3


console.log(obj2.key1); //undefined

console.log("\n\nAfter __proto__   in Object : ");
var obj1 = {
    key1 : "Value1",
    key2 : "Value2"
}

var obj2 = Object.create(obj1);
obj2.key3 = "Value3";

console.log(obj1);
console.log(obj2);
console.log(obj1.key1); //Value1
console.log(obj2.key3); //Value3


console.log(obj2.key1); //Value1

console.log(obj2.__proto__);
console.log(obj1.__proto__);

///////////////////////////////////////////
console.log("\n\n prototype in Function : ");
function All(){
    console.log("Hello Everyone !!!");
}
All();


All.Thisnew = "This is New Data";

All();

console.log(All.Thisnew);

console.log(All.prototype);




// 1) 
// - prototype is a return {}
// - __proto__ is return {}

// 2) 
// - prototype connected with Function 
// - __proto__ connected with Object 


// 3) 
// - prototype return Extra Space.
// - __proto__ return Extra Space.