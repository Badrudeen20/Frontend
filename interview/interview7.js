/* 
   Function composition is the process of chaining together multiple functions to form a new function.
*/
// Q1
const compose = (...functions) => {
      return (input) => {
        return functions.reduceRight((acc, fn) => {
          return fn(acc);
        }, input);
      };
    };

const add5 = (x) => x + 5;
const multiplyBy3 = (x) => x * 3;
const subtract10 = (x) => x - 10;

const composedFunction = compose(subtract10, multiplyBy3, add5);
const result = composedFunction(5);


/* Composition in Javascript */

function swim({name}){
  return {
      swim:()=>console.log(name+' swim')
  }
}
function attack({name}){
  return {
      attack:()=>console.log(name+' attack')
  }
}
function fly({name}){
  return {
      fly:()=>console.log(name+' fly')
  }
}

function bird(name){ 
   const detail = {name:name}
   return {
      ...detail,
      ...fly(detail),
      ...attack(detail)
   }
}

/* const obj = bird('crow')
obj.fly()
obj.attack() */

// Q2
function add(a,b){
  return a + b
}
function square(val){
  return val * val
}

/* function compossed(fn1,fn2){
    return function(a,b){
      return fn1(fn2(a,b))
    }
  } 
  const res = compossed(square,add)
  res(1,2)
*/

function compose2(...fns){
    return function(...val){
       for (const fn of fns) {
         //console.log(fn(...val),fn,...val)
          val = [fn(...val)]
       }
       return val
    }
}
const res2 =  compose2(add,square)
console.log(res2(2,2))






/* console.log([1,2,3].reduce((acc,item)=>{
  console.log(acc , item)
  return acc - item
})) */

/* console.log([1,2,3].reduceRight((acc,item)=>{
  console.log(acc , item)
  return acc - item
})) */

// Generator
function* count(){
  yield 1
  yield 2
  yield 3
}
const increment = count()
for (const iterator of increment) {
  console.log(iterator)
}


