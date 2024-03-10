//Function in Javascript

//Q1 What is Function Declaration OR Function Defintion OR Function Statement
 
function name(text){
      console.log(text)
}
name('Function Declaration')

/* Q2 What is Function Expression 
  Ans:When U store a function inside a variable is called fuction expression
*/
/* const show = function(){
       console.log('Function Expression')
} */
const show = ()=>{
       console.log('Function Expression')
}

/* Q3 What is Annonimous Function 
   Ans: A function Which have no name can be assign to a variable or passed as a callback 
*/



/* Q3 What are First Class Function
   Ans: Function Can be treated like a function there function are called first class function
*/
/* function firstClass(myfunc){
      myfunc('badru')
}
firstClass(name) */

/* Q4 What is IIFE 
   Ans:IIFE means Immediatly invoked function expression
*/
(function(){
      console.log('Annonimous Function')
})()

/* Closer are function which have ability to access the variable out of it laxical scope
 */

/* Q5 Function Scope */
/* for (var i = 0; i < 5; i++) {
     (function(x){
      setTimeout(function(){
            console.log(x)
      },x * 1000)
     })(i)
} */

/* const mycar = new Car('Audi')
class Car{
  constructor(x){
      console.log(x)
  }
}
var badru = 'js Coder' */

/* var age = 20
var fun = function(){
      console.log(age)
      let age = 20
}
fun() */

/* Q6 Params vs Arguments */
function js(params){  //Params Which we received on function
  console.log(params)
}
js('name') //Arguments Which are pass when we call the function

/* Q7 Rest vs Spread Operator 
   The spread operator helps us expand an iterable such as an array,
   it also helps to expand the object expressions. 

   The rest parameter is converse to the spread operator. 
   It collects several elements and compresses them
*/

function multiply(...par){
  console.log(par)
}
const arr = [3,4]
multiply(...arr)


/* Difference Between Arrow Function vs Regular Function */
//Syntax

//Implicite return keyword
/* const s = (p)=> p  */
//arguments
/* function d(){console.log(arguments)} d(3,4)
const sd=()=>{console.log(arguments)} 
sd(3,4) */
//this keyword

/* Q8 Closure */
//Time Optimization
/* function fund(){
      for (let i = 0; i < 10000000; i++) {}
      return function(name){
          console.log(name)
      }
}
const myName = fund()
console.time("1")
myName('badru')
console.timeEnd("1")
console.time("2")
myName('batman')
console.timeEnd("2") */

/* Q9 Create a private Counter using Clouser */
/* function counter(){
  let num = 0
  return function(){
      num++
      return num
  }
}
const increment = counter()
increment()
increment()
increment()
console.log(increment()) */

/* Q10 Create a memorize function using closure */

/* function memoize(fn){
   let obj = {}
   return function(...arg){
      let cach = JSON.stringify(arg)
      if(!obj[cach]){
            obj[cach] = fn.call(this,...arg)
            // obj[cach] = fn.apply(this,arg)
      }
      return obj[cach]
   }
   
}

function calc(num1,num2){
      for (let i = 0; i < 10000000; i++) {}
      return num1 + num2
}
const output =  memoize(calc)

console.time("f")
console.log(output(2,4))
console.timeEnd("f")
console.time("f2")
console.log(output(2,4))
console.timeEnd("f2") */


/* Call Once function using closure */

/* function once(fn){
   let run
   return function(){
      if(fn){
          run = fn.apply(this,arguments)
          fn = null
      }
    
      return run
      
   }  
}
const res = once(()=>console.log('badru'))
res()
res() */

/* Q11 Difference Between Closure and Scope 
   Closure:When ever we create and function within another function then the inner function is called closure
   Scope:Define What variable we can access there are two type of scope
   globle scope and local scope but in case of closure globle, local, outer scope

*/


/* Q12 What is this curring 
   Ans:Curring is the function that take one agrument at a time
       return a new function expecting the next argument
*/

/* 
 Q13 Convert f(a,b,c) into f(a)(b)(c)
*/

/* function curring(fn){
     return function curryFunc(...arg){
         if(fn.length <= arg.length){
            return fn(...arg)
         }else{
            return function(...next){
                  return curryFunc(...arg,...next)
            }
         }
     }
}
const sum = (a,b)=> a + b 
const totalSum = curring(sum)
console.log(totalSum(1)(2)) */