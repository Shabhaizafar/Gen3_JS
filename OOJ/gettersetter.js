//Getter Setter 
class Person{
    constructor(fname,lname){
        this.Firstname = fname;
        this.Lastname = lname;
    }
    get getData(){
        return this.Firstname;
    }
    set setData(a){
        this.Firstname = a;
    }
}

const p1 = new Person("Raj","Patel");

//Print Full Object
console.log(p1);

//Print Object Firstname
console.log(p1.getData);

//Set Firstname Value
//Modify Firstname Value
p1.setData = "Rajesh";

//print Object  with New Values
console.log(p1);

//Print Object Firstname
console.log(p1.getData);



//////////////////////////
// Basic Getter and Setter:

// Create a JavaScript class named Person with a private property _name. Implement getter and setter methods for the _name property. Test the getter and setter methods to ensure they work correctly.

////////////////
// Validation in Setter:

// Create a class Rectangle with private properties _width and _height. Implement getter and setter methods for both properties. Add validation in the setter methods to ensure that width and height must be positive numbers.

////////////////

// Computed Property with Getter:

// Implement a class Circle with a private property _radius. Create a getter method diameter that returns twice the radius. Implement a setter method for the radius that ensures it is always a positive number.

////////////////

// Read-Only Property:

// Define a class Temperature with a private property _celsius. Implement a getter method fahrenheit that calculates the temperature in Fahrenheit. The setter should only modify the Celsius value and should not directly alter the Fahrenheit property.

////////////////

// Chained Getters and Setters:

// Create a class Person with private properties _firstName and _lastName. Implement a getter method fullName that returns the full name by concatenating _firstName and _lastName. Implement a setter method fullName that splits the provided full name string and sets _firstName and _lastName accordingly.