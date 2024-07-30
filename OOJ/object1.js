// How to Create Object : 


// 1) Using Object Literal : {}
// var Obj1 = {
//     fname : "Raj",
//     lname : "Patel",
//     Age : 12
// }
// console.log(Obj1);
// console.log(typeof Obj1);

// Car   --> Brand ,Model,Price


// 2) Using Object Constructor :
// var Obj2 = new Object();
// Obj2.fname = "Raj";
// Obj2["lname"] = "Patel";

// console.log(Obj2);
// console.log(typeof Obj2);


// Laptop    --> Companyname,intel , price


// 3) Using Object.create() : 
// var Obj3 = Object.create({});

// Obj3.fname = "Ajay";
// Obj3.lname = "Shah";
// console.log(Obj3);
// console.log(typeof Obj3);


// boy    -->  fname,lname,age,gender,contactno


// 4) Using Object.assign() : 
// var Obj4 = Object.assign({});

// Obj4.Brand = "BMW";
// Obj4["Price"] = '$1234567';


// console.log(Obj4);
// console.log(typeof Obj4);


// Company  -->   companyname,employee,owner name


// 5) Using Prototype base Function : 

function All(fname,lname){
    var user = {};
    user.Firstname = fname;
    user.Lastname = lname;
    return user;
}

var obj5 = All("Raj","Shah");
console.log(obj5);

// Browsers   --> bname, version, foundername.