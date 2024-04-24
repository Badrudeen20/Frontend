/* 
Q1.Find the factorial of number
*/
function facofnum(n){
   if(n > 1){
      return n * facofnum(n-1)
   }else{
      return n
   }
}
facofnum(3)

/* 
Q.Given an integer array nums of unique elements, return all possible subsets
 Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 Input: [0]      ----->>>>>  Output: [[],[0]]
*/
let c = 0
function calcSubset(arr, res, subset, index) {
   res.push([...subset]);
   
   for (let i = index; i < arr.length; i++) {
      subset.push(arr[i]);
      calcSubset(arr, res, subset, i + 1);
      subset.pop();
   }
   //console.log(subset,index,arr.length,"ff:"+c++)
   
}

function subsets(arr) {
   const subset = [];
   const res = [];
   let index = 0;
  calcSubset(arr, res, subset, index);
   return res;
}

const res = subsets([1, 2, 3]);

function rec(n){
   /* setTimeout(()=>{
     
   },1000) */
   if(n < 10){
      n++
      rec(n)
   }
   //console.log(n,c++)
   
   
}
rec(0)