// Q1.Convert (a,b)=>a-b into curring function
const mul = (a,b,c)=>a + b + c 
function tranFun(fn){
  return function loop(...arg){
      if(arg.length < fn.length){
           return function(...next){
               return loop(...next,...arg)
           }
      }else{
           // a,b,c = ...arg
           return fn(...arg)  
      }
  }
}
const curMul = tranFun(mul)
curMul(1)(3)(7) // done

// Q2.Write a inifine curring funtion on multiply
function multiyCurr(n){
   return function(m){
      if(m){
            return multiyCurr(n * m)
      }else{
            return n
      }
      
   }
}
const res2 =  multiyCurr(2)(3)(2)() //done

// Q3.Find the third highest number from array
// with using single loop function also without using array method

const findthirdhighest = [2,5,0,-1,3,12,6,3,8]
// console.log(findthirdhighest.sort((a,b)=>a-b).slice(this.length-3)[0])
function thirdHighest(arr){
      let first = 0
      let sec = 0
      let third = 0;
      for (let i = 0; i < arr.length; i++) {
           if(first < arr[i]){
              sec = first
              third = sec
              first = arr[i]
           }else if(sec < arr[i] && first !== arr[i]){
              third = sec
              sec = arr[i]
           }else if(third < arr[i] && sec !== arr[i]){
              third = arr[i]
           }
      }
      return third
}
thirdHighest(findthirdhighest)

// Q4. Find pair of sum from array of given number
const sumpair = [1,6,0,-2,5,2,9,0,3,-1,4,7,8]
function sumofpair(arr,val){
      const obj = {}
      const pair = []
  for(let i = 0; i < arr.length; i++) {
      let target =   val - arr[i]
      if(obj[target]){
           pair.push([arr[i],target])
         
      }
      obj[arr[i]] = true
      
  }
  return pair
}
sumofpair(sumpair,3)

// Q5.Write a function to find nth highest number from array
function nthhighest(arr,n){
      return  arr.sort((a,b)=>a-b).reverse()[n-1]
}
nthhighest(sumpair,2)