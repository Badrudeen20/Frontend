//what will be the output 
/* console.log([1,2,3]+[4,5]) //1,2,34,5
   console.log(isNaN("badru")) //true
 */


//which one will create object
/* const obj1 = Object.create(null)
const obj2 = {}
const obj3 = new Object()
console.log(obj1,obj2,obj3) */

//which method can be used to flatten on array
/* const arr = [[1,2],[3,4,[5]]]
console.log(arr.flat(2)) */

//what dose [2,3,4].splice(1,1) return?
console.log([2,3,4].splice(1,2)) //[3,4]
console.log(3 > 2 > 1) // false
console.log([1,2,3]==[1,2,3]) //false 
let a = (1,5-1) * 2
console.log(a) //8
console.log("5"+3-2) //51
console.log((![]+[]).length) //5
console.log((!+[]+[]).length) //4
const b = {name:'f'}
const c = {name:'f'}
console.log(b===c)
console.log("1" - -"1")
console.log(typeof null==="object")
console.log(typeof null==="null")
console.log("d" && "f")
console.log("a"+"b"+ +"a"+"b")
console.log(new Set([1,2,2,3]).size)
console.log(true+"2")
console.log('hi' || [].length)
console.log(0.1 + 0.2 === 0.3)
console.log("hello".includes("Hello")) //false
const arr1 =[]
arr1[3] = 4
console.log(arr1.length) //4 create rest empty 
console.log("3"*"2",[2]*[2])
console.log(typeof NaN)
// console.log(for(;;){})
function infiniteLoop() {
  for (;;) { }
}
// Function call 
infiniteLoop();