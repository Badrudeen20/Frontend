/* 
   Function composition is the process of chaining together multiple functions to form a new function.

*/

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

const obj = bird('crow')
obj.fly()
obj.attack()