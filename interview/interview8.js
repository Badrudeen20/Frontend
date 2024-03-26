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



/* 

Local Storage, Session Storage, And Cookies

Local Storage--------
#The storage capacity of local storage is 5MB/10MB
#it must be deleted via javascript or manually
#The client  can only read local storage
#There is no transfer of data to the server

Local storage has 4 methods:
setItem() Method – This method takes two parameters one is key and another one is value. It is used to store the value in a particular

getItem() Method – This method takes one parameter that is key which is used to get the value stored with a particular key name.

 removeItem() Method – This is method is used to remove the value stored in the memory in reference to key.
*/

// localStorage.setItem('name', 'badru')
// const localData = localStorage.getItem('name')
// console.log(localData)
// localStorage.removeItem('name')
//localStorage.clear()

/*
Session Storage----------
#The storage capacity of session storage is 5MB
#Data is stored only for the duration of a session
#The client  can only read local storage
#There is no transfer of data to the server


*/

/* Session Storage objects can be accessed using the sessionStorage read-only property. The difference between sessionStorage and localStorage is that localStorage data does not expire, whereas sessionStorage data is cleared when the page session ends. 

Session Storage has 4 methods:

setItem() Method – This method takes two parameters one is key and another one is value. It is used to store the value in a particular location with the name of the key.

getIteam() Method – This method takes one parameter that is key which is used to get the value stored with a particular key name.

removeItem() Method – This is method is used to remove the value stored in the memory in reference to key.

clear() Method – This method is used to clear all the values stored in the session storage
*/
// sessionStorage.setItem('name', 'badru')
//console.log(sessionStorage.getItem('name'))
// sessionStorage.removeItem('name')
//sessionStorage.clear()
/*
Cookies-----------
#The storage capacity of Cookies is 4KB
#Cookies expire based on the setting and working per tab and window
#Both clients and servers can read and write the cookies
#Data transfer to the server is exist

*/
