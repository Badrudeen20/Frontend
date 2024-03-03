//MAP,FILTER,REDUCER
const arr = [1,2,3]

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