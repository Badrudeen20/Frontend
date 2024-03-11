// "use strict"

/*  this in global space */
console.log(this) //globalObject is window

/* this inside a function */
function c(){
//the value depends on strict / non-strict mode
console.log(this)
}
c()

//this inside non-strict mode - (this substitution)

/* 
What is this substitution
if the value of this keyword is undefined or null
this keyword will be replaced with globalObject
only in non strict mode
*/

// this keyword value depends on how the function is called (window)
window.c()

//this inside a object method
const obj = {
      name:'abdr',
      show:function(){
           console.log(this.name)  
      }
}
obj.show()
const obj2 = {
      name:'avanger'
}
// obj2.call(obj2)
obj.show.call(obj2)
// obj2.show()


// this inside arrow function


/* const obj3 = {
      x:()=>{
            console.log(this)
      }
}
obj3.x() */


/* 
When this is used in the arrow function then this has lexical scope so without the function keyword this is unable to refer to the object in the outer scope. 

arrow function don't provide their own this binding it retains the value of this enclosing lexical context
*/

const obj4 = {
      name:'manual',
      age:20,
      x:function(){ //enclosing lexical context
            const y = ()=>{
              console.log(this)
            }
            y()
      }  
}
obj4.x()


// this inside dom element
/* 
this keyword inside dom element refernc to the htmlelement
*/