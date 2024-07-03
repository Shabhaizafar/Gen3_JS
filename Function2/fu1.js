// - Function inside function.

function All() {
    var choice = 1;
    switch (choice) {
        case 1: Add();
            break;
        case 2: Sub(a, b);
            break;
        case 3: Mul(a, b);
            break;
        case 4: Div(a, b);
            break;
        case 5: Mod(a, b);
            break;
        default: console.log("Please Enter Valid Choice !!!");
    }
}
All();

function Add() {
    var x =4;// +prompt
    var y = 5//+prompt
    console.log(`Addition of ${x} and ${y} : `, x + y);
}
function Sub(x, y) {

    console.log(`Subtraction of ${x} and ${y} : `, x - y);
}
function Mul(x, y) {
    console.log(`Multiplication of ${x} and ${y} : `, x * y);
}
function Div(x, y) {
    console.log(`Division of ${x} and ${y} : `, x / y);
}
function Mod(x, y) {
    console.log(`Moduler of ${x} and ${y} : `, x % y);
}
