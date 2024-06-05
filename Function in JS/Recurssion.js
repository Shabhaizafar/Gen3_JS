//Recursion in JS : 

// function Hello(){
//     console.log("Hello Everyone");
//     Hello();
// }
// Hello();

// var n= 5;
// var fact = 1;
// for (let i = 1;i <=n; i++) {
//     fact = fact*i; //1*1 = 1 *2 =2*3 = 6
// }
// console.log(fact);


// 5! = 5*4*3*2*1 = 120

// function factorials(n,f){
//     var fact= f*n;
//     if(n==1){
//         return fact;
//     }
//     return factorials(n-1,fact);
// }
// console.log(factorials(5,1));



// Check number is Armstong or not using recursion 


// 121

// 1*3 + 2*3 + 1*3 = 1+8+1 = 10

// 153 
// 1*3 + 5*3 + 3*3 = 1+125+27 = 153

// 8208 
// 8*4 + 2*4 + 0*4 + 8*4 = 8208


function Armstong(n){
    if(n==0)
    {
        return;
    }
    var temp = n%10;
    n = parseInt(n/10);
    console.log(temp,n);
    Armstong(Number(n));
}
Armstong(153);