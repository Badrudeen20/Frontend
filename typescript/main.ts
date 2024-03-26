/**  Hello world program using Typescript  */
/* Typescript improve our code a lot */
console.log("foo".toLocaleLowerCase())
const foo:String = "badru"
const isActive:boolean= true
const age:Number= 20
const obj:{name:String,age:Number,status:boolean} = {
      name:foo,
      age:age,
      status:isActive,
     
}
const users:{name:String,age:Number,status:boolean}[] = [obj]
const person:Array<{name:String,age:Number,status:boolean}> = [obj]

/* Difference between explicit vs implicit types */
/*
 Explicit Types: 
 Explicit typing refers to the practice of explicitly specifying the type of a variable or expression.
*/
let marks: number = 30;
function add(a: number, b: number): number {
  return a + b;
}

/* 
Implicit Types:
Implicit typing, on the other hand, refers to the practice of letting the programming language infer the type of a variable or expression based on its value or usage.
*/
let height = 30; // Type inferred as number
function minus(a: number, b: number) {
  return a - b; // Return type inferred as number
}

/* Write a function getFullName which gets name and surname and return a full name */
function getFullName<String>(name:string,surname:string){
  return name + ' ' + surname 
}
getFullName('badr','andsa')


/* Type vs Interface */
interface User {
  name:string;
  age:number
}

interface Admin extends User {
   status:boolean
}

const admin:User = {
  name:"badr",
  age:20,
}

type Person = {
  name:string;
  age:number;
  getUser():string
}

type Employee = Person & {
  id:number
}

const emp:Employee = {
    name:'bad',
    age:20,
    id:20042,
    getUser():string {
        return this.name
    },
}

class Student implements Person {
  name = "abdru";
  age = 23;
  getUser():string {
    return this.name
  }
}

/* What is union in Typescrips */
const teacher:string|number = 20

/*  What do you know about type narrowing */


/* Class */
class Cricket {
  constructor(public name: string, public age: number) {}

  greet(): void {
      console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const john = new Cricket('Rahul', 22);
john.greet();