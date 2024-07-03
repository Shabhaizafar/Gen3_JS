// - Primitive vs reference data types.
// number,string ,boolean

// var n1 = 12;
// var n2 = n1;
// console.log("Value of N1 :",n1);//12
// console.log("Value of N2 :",n2);//12
// n1++;
// console.log("Value of N1 after Inc :",n1);//13  
// console.log("Value of N2 after inc :",n2);//12  



//Array,object
var Arr1 = [1,2,3];
var Arr2 = Arr1;

console.log("Value of Arr1 : ",Arr1); //[1,2,3]
console.log("Value of Arr2 : ",Arr2); //[1,2,3]

Arr1.push(100);

Arr2.unshift(1000);

console.log("Value of Arr1 After Pushing value : ",Arr1); //[1,2,3,100]
console.log("Value of Arr2 After Pushing value : ",Arr2); //[1,2,3,100]



























// n1 = 12
// n2 = 12 

// print(id(n1))
// print(id(n2))