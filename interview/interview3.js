/* OOPS CONCEPTS
Object	Classes	Encapsulation
Abstraction	Inheritance	Polymorphism
*/

/* 
Object: An Object is a unique entity that contains properties and methods.


The object can be created in two ways in JavaScript:

Object Literal
Object Constructor
*/

// ES6 classes the traditional way of defining an Object

//Using an Object Literal.
let person = {
      first_name: 'Mukul',
      last_name: 'Latiyan',
   
      //method
      getFunction: function () {
          return (`The name of the person is 
            ${this.first_name} ${this.last_name}`)
      },
      //object within object
      phone_number: {
          mobile: '12345',
          landline: '6789'
      }
}
// console.log(person)
//Using an Object Function Constructor.
function Employee(first_name, last_name) {
      this.first_name = first_name;
      this.last_name = last_name;
}
  // Creating new instances of person object
let emp1 = new Employee('Mukul', 'Latiyan');
let emp2 = new Employee('Rahul', 'Avasthi');


/* 
Classes: Classes are blueprints of an Object. A class can have many Objects because the class is a template while Objects are instances of the class or the concrete implementation. 
*/

class Vehicle {
      constructor(name, maker, engine) {
          this.name = name;
          this.maker = maker;
          this.engine = engine;
      }
      getDetails() {
          return (`The name of the bike is ${this.name}.`)
      }

}
// console.log(new Vehicle())
const insance = new Vehicle()

/* 
Note: The JavaScript Object.create() Method creates a new object, using an existing object as the prototype of the newly created object.
*/

const coder = {
      isStudying: false,
      printIntroduction: function () {
          console.log(`My name is ${this.name}. Am I 
                studying?: ${this.isStudying}.`)
      }
  }
  // Object.create() method
  const me = Object.create(coder);
  // "name" is a property set on "me", but not on "coder"
  me.name = 'Mukul';
  // Inherited properties can be overwritten
  me.isStudying = true;
  me.printIntroduction();



// Defining class in a Traditional Way.
function Vehicle(name, maker, engine) {
      this.name = name,
          this.maker = maker,
          this.engine = engine
  };
   
  Vehicle.prototype.getDetails = function () {
      console.log('The name of the bike is ' + this.name);
  }
   
  let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
  let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
   
//   console.log(bike1.name);
//   console.log(bike2.maker);
//   console.log(bike1.getDetails());




/* 
Abstraction: Abstraction means displaying only essential information and hiding the details. Data abstraction refers to providing only essential information about the data to the outside world.
*/

// Abstraction example
function Person(fname, lname) {
      let firstname = fname;
      let lastname = lname;
   
      let getDetails_noaccess = function () {
          return (`First name is: ${firstname} Last 
              name is: ${lastname}`);
      }
   
      this.getDetails_access = function () {
          return (`First name is: ${firstname}, Last name is: ${lastname}`);
      }
}
let person1 = new Person('Mukul', 'Latiyan');
/* console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access()); */


/* 
Inheritance: It is a concept in which some properties and methods of an Object are being used by another Object.
*/


// Inheritance example
class Human {
      constructor(name) {
          this.name = name;
      }
      toString() {
          return (`Name of person: ${this.name}`);
      }
  }
  class Student extends Human {
      constructor(name, id) {
          // super keyword for calling the above 
          // class constructor
          super(name);
          this.id = id;
      }
      toString() {
          return (`${super.toString()},
          Student ID: ${this.id}`);
      }
  }
  let student1 = new Student('Mukul', 22);
  console.log(student1.toString());

  /* 
  Note: The Person and Student objects both have the same method (i.e toString()), this is called Method Overriding. Method Overriding allows a method in a child class to have the same name(polymorphism) and method signature as that of a parent class. 

  In the above code, the super keyword is used to refer to the immediate parent class’s instance variable. 


  Polymorphism: Polymorphism is one of the core concepts of object-oriented programming languages. Polymorphism means the same function with different signatures is called many times. In real life, for example, a boy at the same time may be a student, a class monitor, etc. So a boy can perform different operations at the same time. Polymorphism can be achieved by method overriding and method overloading
  */



  