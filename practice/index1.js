/* 
Q1.shift the array of element with the given size
input:[1,5,7,-4,2,0,1],size:3
output:[2,0,1,1,5,7,-4]
*/

function solution(arr,len){
    const res = arr.splice(this.length-len)
    arr.unshift(...res)
}
solution([1,5,7,-4,2,0,1],3)


/* 
Q2.Find the secound higest element from array
*/
let arr1 = [1,5,7,-4,2,0,1]

// CASE 1
const sechighno = arr1.sort((a,b)=>b-a)[1]

// CASE 2
function sechighest(arr){
    let first = arr[0];
    let sec = first
    for(let i = 0; i < arr.length; i++) {
        if(first < arr[i]){
            sec = first
            first = arr[i]
        }else if(sec < arr[i] && first > arr[i]){
           sec = arr[i]
        }
    }
    return sec
}
sechighest(arr1)


/* 
Q3.Write a function to chunk a given integer array of given size
*/
function chunkarr(chunkarr,len){
      let end = len
      let start = 0
      while(start < chunkarr.length) {
        let chunk = chunkarr.slice(start,end)
        start +=len
        end += len
        
      }
    
}
chunkarr(arr1,4)

/* 
Q4.Create a stop watch
*/

function createbtn(){
    const btn1 = document.createElement('button')
    btn1.textContent = 'start'
    btn1.setAttribute('id','start')
    document.body.append(btn1)
    
    const btn2 = document.createElement('button')
    btn2.textContent = 'stop'
    btn2.setAttribute('id','stop')
    document.body.append(btn2)

    const clock = document.createElement('div')
    clock.setAttribute('id','clock')
    document.body.append(clock)

}
createbtn()
function stopwatch(){
    let clock = document.querySelector('#clock')
    let interval;
    let timer = ''
    function start(){
        let current = Date.now()
        interval = setInterval(()=>{
            let timer = Date.now()
            let dif = timer - current
            let formatedtime = formate(dif)
            clock.textContent = formatedtime
        },10)
    }

    function formate(time){
        let hour = Math.floor((time/(1000*60*60)%24))  
        let min = Math.floor((time/(1000*60)%60))  
        let sec = Math.floor((time/1000)%60)
        let mil = Math.floor((time%1000)/10)
        return pad(hour)+":"+ pad(min)+":"+ pad(sec)+":"+ pad(mil)
    }

    function pad(time){
        return time < 10 ? '0'+time:time
    }

    function stop(){
      clearInterval(interval)
    }
    function reset(){
        clearInterval(interval)
        start()
    }

    return {
        start,
        stop,
        reset,
    }
}
const clock =  stopwatch()

let btn1 = document.querySelector('#start')
btn1.addEventListener('click',function(){
    clock.start()
})
let btn2 = document.querySelector('#stop')
btn2.addEventListener('click',function(){
    clock.stop()
})



/* 
Q5.Create a chessbox
*/
function chessbox(len){
  let box = ''
  for(let i = 0; i < len; i++) {
    for(let k = 0; k < len; k++) {
        if(i%2==0){
            if(k%2==0){
                box+='🧇'
            }else{
                box+='🎹'
            }
           
        }else{
            if(k%2==0){
                box+='🎹'
            }else{
                box+='🧇'
            }
           
        }
        
    }
    box+='\n'
  }
  return box
}
chessbox(9)


/* 
Q6.create a infinite curring
*/
function inifcurr(n1){
  return function loop(n2){
    if(n2){
      return inifcurr(n1+n2)
    }else{
        return n1
    }
  }
}
inifcurr(1)(2)(4)()

/* 
Q6.convert (a,b,c)=>a+b+c into curring
*/
const add = (a,b,c)=>a+b+c
function convertfn(fn){
    return function loop(...arg){
       if(fn.length > arg.length){
            return function(...next){
                  return loop(...arg,...next)
            }
       }else{
          //fn(a,b,b) ...arg = 1,2,3
          return fn(...arg)
       }
    }
}
const conver = convertfn(add)
conver(1)(2)(3)

/* 
Q7.Write a function to check happy number
Input: n = 19
Output: True
19 is Happy Number,
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
As we reached to 1, 19 is a Happy Number
*/

function ishappy(n){
    let fast  = n
    let slow = n
    function power(num){
        let total = 0
        while(num){
            let res = num%10
            num = Math.floor(num/10)
            total+=Math.pow(res,2)
        }
        return total
    }

    while(true){
        fast = power(power(fast))
        slow = power(slow)
        if(fast==slow){
            return fast === 1
        }
    }
    
}
ishappy(42)


/* 
Q8.Reverse a array of element without using array method
*/
function customrev(arr){
   for (let i = 0; i < (arr.length/2); i++) {
      let len = (arr.length - 1)-i
      let temp = arr[i]
      arr[i] = arr[len]
      arr[len] = temp
   }
//    console.log(arr)
}
customrev([1,2,3,4,5,6])

/* 
Q9.Sort a array with asc order without using array mathod
*/
function customsort(arr){
      for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
                //  let temp = arr[i]
                //  arr[i] = arr[j]
                //  arr[j] = temp  
            }
        }
      }
    //   console.log(arr)
}
customsort([1,5,0,-3,2,8,2])


/* 
Q10.write a function to create fibonachi 
    also using recursion
*/

// CASE 1
function fibo(len){
    let fib = [0,1]
    for (let i = 0; i < len; i++) {
        let last =  fib.length-1
        let seclast =  fib.length-2
        fib.push(fib[last] + fib[seclast])
    }
    // console.log(fib)
}
fibo(5)

// CASE 2

function recurfib(len){
    if(len <= 1){
        return len; 
    }
    return recurfib(len-1) + recurfib(len-2)
}
for (let i = 0; i < 10; i++) { 
    recurfib(i)
};

/* 
Q11.write a function to find the factorial
*/

function fac(n){
   if(n<1){
       return 1
   }else{
    return n * fac(n-1)
   }
}
fac(5)


/* 
Q12.Find the all posible sub array from array element
*/


function findsubset(arr){
   let subset = []
   for(let i = 0; i < arr.length; i++) {  
      for(let j = i; j < arr.length; j++) {
          subset.push(arr.slice(i,j+1))     
      }  
   }
//    console.log(subset)
}
findsubset([1,2,3,4])


/* 
Q13.Sum of pair of given number
*/

// CASE 1
function findPairForSum(arr, target) {
    var pairSums = [];
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          newArr.push(arr[i]);
          newArr.push(arr[j]);
          pairSums.push(newArr);
          newArr = [];
        }
      }
    }
    // console.log(pairSums)
    return pairSums;
}
findPairForSum([1,1,3,4,2],4)

// CASE 2
function findpair(arr,target){
    let obj = {}
    let pair = []
    for(let i = 0; i < arr.length; i++) {
        let val =  target -arr[i] 
        if(obj[val]){
            pair.push([arr[i],val])
        }
        obj[arr[i]] = true
    }
    // console.log(pair)
}
findpair([1,2,3,4,5,-2],3)

/* 
Q14.Find the missing number
*/
function findmiss(arr){
    let len = arr.length+1
    let sum = arr.reduce((a,c)=>{
         return a+c
    },0)
    let exp= len * (len+1)/2

    // console.log(exp,sum)
    return  exp - sum
}
findmiss([1,2,3,5])

/* 
Q15.Remove the dublicate
*/
const books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
];
const ids = books.map(({ title }) => title);
const filtered = books.filter(({ title }, index) =>{
    // console.log(title,index+1,ids.includes(title,index + 1))
    return !ids.includes(title, index + 1)
})


/* 
Q16.Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. 
Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

// CASE 1
function largestsub(arr){
    let start
    let end
    let sum = arr[0]
    for(let i = 0; i < arr.length; i++) {
        let temp = 0
        for(let j = i; j < arr.length; j++) {
            let s = temp + arr[j] 
            // console.log(temp+"(+)"+arr[j]+"="+s)
            temp = s
            
            if(temp > sum){
                sum = temp
                start = i
                end = j
            }
        }
    }
    //console.log(sum,arr.slice(start,end+1))
}
largestsub([-2,1,-3,4,-1,2,1,-5,4])


// CASE 2
function findthelargestsumofsubarray(arr){
    let sum = arr[0]
    let temp = 0
    for(let i = 0; i < arr.length; i++) {
      temp +=arr[i]  
      if(sum < temp){
         sum = temp
      }
      if(temp < 0){
         temp = 0
      }
    }
    // console.log(sum)
}
findthelargestsumofsubarray([-2,1,-3,4,-1,2,1,-5,4])