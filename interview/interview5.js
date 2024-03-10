/* const myfun = function(){
      console.log(this.name)
      const fun = ()=>{
             console.log(this)
      }
      fun()
}
myfun.call({name:"badru"}) */

/* const person = {
      name:"badru",
      age:20,
      selected:true
}

const user = {
      name:'allu',
      age:34,
      fun:()=>{
            console.log(this)
      }
}

user.fun.call(person) */

/* const str = ['below','listen','silent','car','elbow','arc','rca']
//const obj = {...strings}
//console.log(JSON.stringify(strings))
const grpStr = []
for (let i = 0; i < str.length; i++) {
     let temp = []
     for (let j = 0; j < str.length; j++) { 
         if(str.indexOf(str[j])!==i){
            let check = true
            for (let k = 0; k < str[i].length; k++) {
               if(!str[j].includes(str[i][k])){
                  check = false
               }
            } 
            if(check){
                  if(!temp.includes(str[i])){
                     temp.push(str[i]) 
                  }
                  if(!temp.includes(str[j])){
                     temp.push(str[j]) 
                  }
                    
            }
         }
          
     }
     let exist = false
     for (let l = 0; l < temp.length; l++) {
         exist = exists(grpStr, temp[l])
     }   
     if(!exist){
      grpStr.push(temp)
     }
     
     
     
}
function exists(arr, search) {
      return arr.some(row => row.includes(search));
  }
console.log(grpStr) */

/* Tagged Template Literal */
/* const name = 'JS'
function show(a,b){
       console.log('a',a)
       console.log('b',b)
}
show`${name} badru` */
/* if([]){
      console.log('🎈')
}
if([]==false){
      console.log('🎁')  
}

console.log(3+true) */

/* function sum(n){
      return (m)=>{
         if(m===undefined){
             return n
         }else{
            return sum(n+m)
         }
      }
}
console.log(sum(1)(2)(3)()) */

/* console.log(0===-0)
console.log(0==-0)
console.log(Object.is(0,-0)) */


/* const {x,x:u,y} = {x:2,y:3}
console.log(x,u,y) */

/* const x= 6
function show(){
      function call(){
             console.log(x)
      }
      const x = 5
      return call
}
let fun = show()
fun() */


