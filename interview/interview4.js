//MAP,FILTER,REDUCER
// const arr = [1,2,3]

/* 
const mapArr = arr.map((e,i,a)=>{
      return e * 2
})
const filterArr = arr.filter((e,i,a)=>{
       return e > 1
})

const sum = arr.reduce((v,e,i,a)=>{
   return v+e
},0)
const obj = arr.reduce((v,e,i,a)=>{
   return {...v,[i]:e}
},{})
console.log(obj) */

/* 
Array.prototype.myMap = function(cb){
      let temp = []
      for (let i = 0; i < this.length; i++) {
            temp.push(cb(this[i],i,this))
      }
      return temp
}

const mapArr = arr.myMap((e,i,a)=>{
      return e * 2
})
console.log(mapArr)


Array.prototype.myFilter = function(cb){
      let temp = []
      for (let i = 0; i < this.length; i++) {
            if(cb(this[i],i,this)){
             temp.push(this[i])
            }
      }
      return temp
}

const filterArr = arr.myFilter((e,i,a)=>{
      return e > 1
})
console.log(filterArr)

Array.prototype.myReducer = function(cb,acc){
      for (let i = 0; i < this.length; i++) {
            acc = cb(acc,this[i],i,this)
      }
      return acc
}
const obj = arr.myReducer((v,e,i,a)=>{
      return {...v,[i]:e}
   },{})
console.log(obj) */



//CALL BIND APPLY

// Object Literal:
/* const person = {
      name: 'John',
      age: 30,
      gender: 'male'
}; */

// Constructor Function
/* function Person(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
}
  
const person = new Person('John', 30, 'male'); */

/* const personPrototype = {
      sayHello: function() {
        console.log('Hello!');
      }
};
    
const person = Object.create(personPrototype); */
// Class Syntax (ES6+):
/* class Person {
      constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
      }
} */

/* const obj = {
      name:'badru',
      age:20
}
function person(msg){
   return msg + this.name +' and my age '+this.age      
}

console.log(person.call(obj,'Hello My name'))
console.log(person.call(obj,['Mere naam ']))
const bindPermon = person.bind(obj)
console.log(bindPermon('Hello mera naam ')) */

/* const age = 30
const human = {
      name:'badru',
      age:20,
      getAge:function(){
            return this.age
      }
}
const animal = {
      age:30
}
console.log(human.getAge.call(animal)) */

/* const animal = [
      {species:"Dog",name:"Cool"},
      {species:"Lion",name:"King"}
]

function animationType(i){
      console.log('#'+i+' '+this.species+" : "+this.name)  
} 

for (let i = 0; i < animal.length; i++) {
      animationType.call(animal[i],i) 
} */

/* const ele = ['A','B','C']
arr.push.apply(arr,ele)
console.log(arr) */
/* console.log(Math.max.apply(null,arr))
 */

/* const user = {
   name:'badru',
   find(){
       console.log(this.name)
   }
}
user.find()
// let cal = user.find   // not work
let cal = user.find.bind(user)
cal() */
/* const person = {
      name:"badru",
      age:20
}

const methods = {
      //arrow function does'nt work with call,apply,and bind methos
      getName:()=>console.log(this.name),
      getAge:function(){console.log(this.age)}
}

methods.getAge.call(person)
methods.getName.call(person) */


/* const person = {
      name:"badri",
      age:20
}

function show(){
       console.log('My name is '+this.name+' '+'and my age is '+this.age)
} */
// show.call(person)

//Call Pollyfill

/* Function.prototype.myCall = function(obj,...arg){
      if(typeof this !=='function'){
            throw new Error(this+' It is not callable')
      }
        obj.fn = this
        obj.fn(...arg)
}
Function.prototype.myApply = function(obj,ars=[]){
      if(typeof this !=='function'){
            throw new Error(this+' It is not callable')
      }
        obj.fn = this
        obj.fn(ars)
}
Function.prototype.myApply = function(obj){
      if(typeof this !=='function'){
            throw new Error(this+' It is not callable')
      }
      return  obj.fn = this    
} */

//Hoisting
/* var x = 0
function foo(){
      console.log(x)
      var x = 10 
}
foo() */
/* var x = 0
function foo(){
      console.log(x)
}
foo() */

/* function foo(){
      var x =0;
}
console.log(x)
foo() */
/* if(true){
      var x=0;
}
console.log(x) */

/* for (let i = 0; i < 3; i++) {
      var element = i;
      
}
console.log(element) */


/* function foo(){
      // console.log(x)   
      x = 10
      console.log(x)   
}
foo() */
/* foo()
var foo = 20;
function foo(){
    console.log(foo)   
}
foo() */

/* const sendEmail = (t)=>new Promise((res,rej)=>setTimeout(()=>res(),t)) */
/* async function foo(){
      //  return await new Promise((res,rej)=>rej())
       return  Promise.reject(new Error("Explicit rejection"));
} */
// foo().then(e=>console.log(e))
// console.log(name)
// console.log(foo())
/* var data = new Promise((res,rej)=>rej('not done'))
data.then(e=>console.log(e)).catch(e=>console.log(e)) */



/* console.log([]==[])
console.log({}=={}) */
/* 
const user1 = {
      name:"abdr",
      age:20,
      
}
const user2 = {...user1}
const user3 = structuredClone(user1)
user3.name = "badr"
console.log(user1,user3) */


/* function foo(){
      console.log('done')
      return "re"
}
const name = new foo()
name.xyz = "ad"
console.log(name) */





















