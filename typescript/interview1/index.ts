/* What is typescript */
/* What are the different component in typescript */
/* Why we should use ts */
/* What are the accessess modifire supported by ts   */
/* What type did typescript add to javascript */
/* What are the difference between interface and type ,
   when should we use it
*/
/* What are generic type in typescript */
/* What do you understand about structure typing in typescript */
/* Rules of Private field in typescript */
/* How to choose between never and any in typescript */
/* When to use declare keyword in typescript */
/* What are ambinence in typescript, when should we use it */
let student:any = 'badru';
student = 23
let variable1:void
let variable12:never;
function infiniteLoop(): never { 
      for (;;) {} 
} 
// Function call 
infiniteLoop();
let val:boolean= true
function greet():never{
      while(true){
            console.log('df')
      }
}
function throwException():never{
      new Error('This is error')
      throw new TypeError('badru')
}
