// - Method overriding.
// class Father{
//     constructor(){
//         this.Fathername = "Rajesh";
//         this.Lastname = "Patel";
//     }
//     property(){
//         console.log("Car,Bikes,House.");
//     }
// }

// class Child extends Father{
//     constructor(){
//         super();
//         this.Childname = "Raj";
//     }
//     property(){
//         console.log("This is a Child Method!!");
//     }
// }



// const c1 = new Child();
// console.log(c1);

// c1.property();


// - Method overloading.
class Person{
    constructor(){
        this.firstname = "Raj";
        this.lastname = "Shah";
        this.age =  10;
    }
    bioData(){
        console.log(`Hello ,My Name is ${this.firstname} ${this.lastname}.and my Age is ${this.age}.`);
    }
    bioData(){
        console.log("This is a Second One !!");
    }
}

const p1 = new Person();
console.log(p1);

p1.bioData();
///////////////////////////////////////
// Basic Overriding:

// Implement a base class Shape with a method area(). Create a subclass Circle that overrides area() to compute the area of a circle. Test the method by creating an instance of Circle.
/////////////////////
// Method Overriding with super:

// Define a base class Vehicle with a method start(). Create a subclass ElectricCar that overrides start() and calls super.start() within the overridden method. Demonstrate the output when calling start() on an ElectricCar instance.
/////////////////////
// Constructor Overriding:

// Create a base class Employee with a constructor that initializes name and position. Create a subclass Manager that overrides the constructor to also initialize department. Show how Manager instances are created and how the constructor initializes properties.
/////////////////////
// Simulate Method Overloading:

// Implement a class Calculator with a method multiply() that behaves differently based on whether it receives one or two arguments. Show how you handle overloading using the number of arguments.
//////////////
// Different Argument Types:

// Create a class Formatter with a method format() that behaves differently based on the type of its argument (string or number). Demonstrate how the method handles different types of inputs.
//////////////

// Default Parameters for Overloading:

// Define a class Logger with a method log(message, level) where level has a default value. Show how you use default parameters to simulate overloading by calling the method with one or two arguments.
//////////////
