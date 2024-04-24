const obj = {"a":1}
function objfun(obj){
   obj.a =2
}
/* objfun(obj)
console.log(obj) */
function objfun2(...obj){
      obj.a =2
}
/* objfun(obj)
console.log(obj) */

let c=1
function test(c){
      c = 2
}
/* test(c)
console.log(c) */

const key = {"a":"b"}
let obj2 = {"a":"b"}
obj2[key] = "obj"
/* console.log(obj2)
for (const c of obj2) {
      console.log(c)
} */


function Emp(name,dept){
      this.name = name
      this.dept = dept
}
/* var emp = Object.create(Emp)
console.log(emp.log) */

function Emp2(name){
  this.name = name
  return this.name
}
function Emp3(name){
  this.name = name
  return ()=>name
}
/* const e1 = new Emp2('d')
const e2 = new Emp3('f')
console.log(typeof e1,typeof e2) */

function Emp4(name,dept){
      this.name = name
      this.dept = dept
}
/* var emp = Object.create(new Emp4('d','f'))
delete emp
console.log(emp) */