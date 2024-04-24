/* 
  Q1.Rotate array 
  Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
  Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]
*/

function rotArray(arr,val){
  let len = arr.length
  if(len > val){
      const part = arr.splice(this.length-val,val)
      arr.unshift(...part)
  }
  return arr
}
rotArray([1,2,3,4,5,6,7],3)

function revfun(arr,val){
   let len = arr.length
   if(len > val){
      rev(arr,0,len-1)
      rev(arr,0,val-1)
      rev(arr, val, len - 1);
   }
}
revfun([1,2,3,4,5,6,7],3)
function rev(arr,left,right){
   while(left < right){
      let temp = arr[left]
      arr[left++] = arr[right]
      arr[right--] = temp
   }
   console.log(arr)
}

/* 
Q2. Sum of subarray
Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
*/

/* 
Q3.Fint the sec min number
*/