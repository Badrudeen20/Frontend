/**  Hello world program using Typescript  */
/* Typescript improve our code a lot */
console.log("foo".toLocaleLowerCase());
var foo = "badru";
var isActive = true;
var age = 20;
var obj = {
    name: foo,
    age: age,
    status: isActive
};
var users = [obj];
var person = [obj];
/* Difference between explicit vs implicit types */
/*
 Explicit Types:
 Explicit typing refers to the practice of explicitly specifying the type of a variable or expression.
*/
var marks = 30;
function add(a, b) {
    return a + b;
}
/*
Implicit Types:
Implicit typing, on the other hand, refers to the practice of letting the programming language infer the type of a variable or expression based on its value or usage.
*/
var height = 30; // Type inferred as number
function minus(a, b) {
    return a - b; // Return type inferred as number
}
