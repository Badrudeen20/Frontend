"use strict";
/**  Hello world program using Typescript  */
/* Typescript improve our code a lot */
console.log("foo".toLocaleLowerCase());
const foo = "badru";
const isActive = true;
const age = 20;
const obj = {
    name: foo,
    age: age,
    status: isActive,
};
const users = [obj];
const person = [obj];
/* Difference between explicit vs implicit types */
/*
 Explicit Types:
 Explicit typing refers to the practice of explicitly specifying the type of a variable or expression.
*/
let marks = 30;
function add(a, b) {
    return a + b;
}
/*
Implicit Types:
Implicit typing, on the other hand, refers to the practice of letting the programming language infer the type of a variable or expression based on its value or usage.
*/
let height = 30; // Type inferred as number
function minus(a, b) {
    return a - b; // Return type inferred as number
}
/* Write a function getFullName which gets name and surname and return a full name */
function getFullName(name, surname) {
    return name + ' ' + surname;
}
getFullName('badr', 'andsa');
const admin = {
    name: "badr",
    age: 20,
};
const emp = {
    name: 'bad',
    age: 20,
    id: 20042,
    getUser() {
        return this.name;
    },
};
class Student {
    constructor() {
        this.name = "abdru";
        this.age = 23;
    }
    getUser() {
        return this.name;
    }
}
/* What is union in Typescrips */
const teacher = 20;
/*  What do you know about type narrowing */
/* Class */
class Cricket {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
const john = new Cricket('Rahul', 22);
john.greet();
