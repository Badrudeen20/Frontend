//Q1.Write a function that return the reverse of a string
const str1 = "Badrudeen ansary"
//console.log(str1.split("").reverse().join(""))
function reverse_str(str){
    let revstr = ''
    for(word of str){
      revstr = word + revstr 
    }
    return revstr
}
reverse_str(str1)

//Q2.Write polyfill of map method
Array.prototype.myMap = function(cb){
  let temp = []
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i],i,this))
  }
  return temp
}
/* const arrMap = [1,2,4].myMap(function(ele,index){
   return ele * index
}) */

//Q3.Write polyfill of filter method

Array.prototype.myFilter = function(cb){
  let temp = []
  for(let i = 0; i < this.length; i++) {
      if(cb(this[i],i,this)){
        temp.push(this[i])
      }
  }
  return temp
}
/* const arrFilter = [1,2,4,3,5,7].myFilter(function(ele,index){
  return ele%2==0 
}) */

//Q4.Write polyfill of forEach method
Array.prototype.myEach = function(cb){
 for (let i = 0; i < array.length; i++) {
       cb(this[i],i) 
 }
}


// Q5.Write polyfill of reducer method
Array.prototype.myReducer = function(cb,acc=undefined){
  let temp = acc ?? undefined
  for (let i = 0; i < this.length; i++) {
    if(temp==undefined){
      temp = this[i]
    }else{
      temp = cb(temp,this[i],i,this)
    }
      
  }
  return temp
}
const sum = [1,2,3].myReducer((acc,item,i,arr)=>{
         return acc + item
})


//Q6.Write a function to create chessbox
function chessbox(){
  let start = "";
  for (let i = 1; i < 9; i++) {
     for (let j = 1; j < 9; j++) {
      if(i%2==0){
        if(j%2==0){
          start +="📉"
        }else{
          start +="📈"
        }
        
      }else{
        if(j%2!==0){
          start +="📉"
        }else{
          start +="📈"
        }
        
      }
      
     }
     start +="\n"
  }
  // console.log(start)
}
chessbox()

//Q8.Write a function to sum of three higest number 
const arr20 = [9,4,2,5,0,-1,-34,4]
arr20.sort((a,b)=>a-b)
       .slice(arr20.length-3)
       .reduce((acc,ele)=>{
          return acc + ele
        },0)
     
//Q9.Write a function to print dimand shape pattern
  let l=5
  let start = ''
  for (let i = 1; i < 5; i++) {
    for(let j = 1; j < (2*l); j++) {
        if(i+j>=(l+1) && i >= (j-l)+1){
          start+='*'
        }else{
          start+=' '
        } 
    }
    start+='\n'
  }
  for (let i = 5; i >= 1; i--) {
      
      for(let j = 1; j < (2*l); j++) {
          if(i+j>=(l+1) && i >= (j-l)+1){
            start+='*'
          }else{
            start+=' '
          } 
      }
      start+='\n'
  }
  


/* 
Q10.write a function to chunk a array of given number
Ex.[1,2,4,5,7,84,3,6] ,3 = [[1,2,4],[5,7,84],3,6]
*/
function arrChunk(arr,len){
   let start = 0;
   let end = len
   let temp = []
   while(start < arr.length){
    temp.push(arr.slice(start,end))
    start = end
    end = start + len
   }
   return temp
  
}
arrChunk([1,2,4,5,7,84,3,6],4)

/* 
Q11.Convert (a,b,c)=>a+b+c into (a)(b)(c)
*/

function curring(fn){
  const loop = (...arg)=>{
      if(arg.length < fn.length){
          return function(...next){
              return loop(...next,...arg)
          }
      }else{
        return fn(...arg)
      }
  }
  return loop
}
const convert = curring((a,b)=>a+b)
convert(1)(3)


/* 
Q.12 Write a infinit curring 
*/
function icurring(){
    let sum = 0;
    const loop = (...arg)=>{
      sum +=+arg
      if(arg.length){
        return function(...next){
            return loop(...next)
        }
      }else{
        return sum
      }
    }
    return loop
}
const icur = icurring()
icur(1)(2)(4)(7)()

function add(num1){
  return function(num2){
    if(!num2){
      return num1
    }else{
      return add(num1 + num2)
    }
  }
}
add(1)(3)(1)(9)()


// Q13.find the sum of highest sub array from array
const arr10 = [1,3,-2,0,-5,3,2,-1,0,3,-4,1]
let s = 0;
let e = 0;
let h = 0;
for(let i = 0; i < arr10.length; i++) {
    let temp = 0;
    for(let j = i; j < arr10.length; j++) {
        temp +=arr10[j]
        if(h < temp){
          h = temp
          s = i
          e = j
        }
    }
}
arr10.slice(s,e)


/*Q14.Find the second and third largest number from array */
function nlargest(arr,len){
  let higest = Number.NEGATIVE_INFINITY
  let secondHigest = Number.NEGATIVE_INFINITY
  for (let i = 0; i < arr.length; i++) {
      if(higest < arr[i]){
        secondHigest = higest
        higest = arr[i]
      }else if(secondHigest < arr[i] && higest !== arr[i]){
        secondHigest = arr[i]
      }
  }
  return secondHigest
}
nlargest([1,3,0,7,-2,0,5,1,4,-1],2)

/* 
Q15.Write a function which is call once only
*/

function onceCall(fn){
  let isCalled = false
  return function(...arg){
      if(!isCalled){
        isCalled = true
        return fn(...arg)
      }
  }
}
const call = onceCall((a,b)=>a+b)
call(1,4)

/* 
Q16.Write a function to reverse array without using method
*/

const arr25 = [1,6,8,0,-9,-1,0,4,2,76,2,6]
function revArr(arr25){
  for(let i = 0; i < arr25.length/2; i++) {
      let temp = arr25[i]
      let len = (arr25.length-1)-i
      arr25[i] = arr25[len]
      arr25[len] = temp
  }
  return arr25
 
}
revArr(arr25)

/* 
Q17.Find this sum pair of give number from array
EX:[1,4,6,3,8,1,2,3],4
[1,3][3,1]

*/

function sumofpair(arr,val){
  const obj = {}
  const pair = []
  for(let i = 0; i < arr.length; i++) {
    let tem = val - arr[i] 
    if(obj[tem]){
      if(!pair.includes(JSON.stringify([arr[i],tem]))){
         pair.push(JSON.stringify([arr[i],tem]))
      }
      
    }
    obj[arr[i]] = tem
  }
  return pair.map(item=>item.replace(/\[|\]/g, ''))
}
const pair = sumofpair([1,4,6,3,8,1,2,3],4)


/*-------------------Sorting Algorithms---------------*/
// Q1.Merge Sorting
const sort = [9,-2,0,5,2,9,-1,5,8,3,1,7,7,3,-4]

/*  
  function mergeSort(arr){
      if (arr.length <= 1) return arr;
      let mid = Math.floor(arr.length / 2);

      let left = mergeSort(arr.slice(0, mid));
      let right = mergeSort(arr.slice(mid));
      
      return merge(left, right);
  }
  mergeSort(sort)

  function merge(left, right){
    console.log(left,right)
    let sortedArr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    return [...sortedArr, ...left, ...right];
  }
*/

function mergeSort(arr){
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  
}
var arr = [11,15,13];
var arr_size = arr.length;
mergeSort(arr)

function merge(L,R,arr){
  var i = 0;
  var j = 0;
  var k = 0;
  
  if(L && R){
    while (i < L.length && j < R.length) {
      if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
      }
      else {
          arr[k] = R[j];
          j++;
      }
      k++;
    }
    
    while (i < L.length) {
      arr[k] = L[i];
      i++;
      k++;
    }

    while (j < R.length) {
        arr[k] = R[j];
        j++;
        k++;
    }
    console.log(arr)
    return arr
  }

}


// Q.Quick Sort
function quicksort(arr){
  if(arr.length<=1) return arr
  let pivot = arr[0]
  let left = []
  let right = []
  for(let i = 1; i < arr.length; i++) {
      if(arr[i] < pivot){
        left.push(arr[i])
      }else{
        right.push(arr[i])
      }
  }
  // console.log(left,right)
  return [...quicksort(left),pivot,...quicksort(right)]
}
const arr50 = [5,2,9,3,6,1,8,7]
quicksort(arr50)

// Q.bubble sort
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

bubbleSort([29, 10, 14, 37, 14])


/* 
Q.Print all subsets of a given Array in js
Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/
function printAllSubsets(array) {
  function backtrack(start, subset) {
      console.log(subset,start); // Print the subset
      for (let i = start; i < array.length; i++) {
          subset.push(array[i]); // Include the current element
          backtrack(i + 1, subset); // Recur for the next elements
          subset.pop(); // Exclude the current element and backtrack
      }
  }

  backtrack(0, []); // Start with an empty subset at index 0
}

// Example usage:
const array = [1, 2, 3];
printAllSubsets(array);









