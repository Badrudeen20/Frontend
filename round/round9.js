/* 
Q1.Find the max num from the moving sliding window of k size each time
Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
Output: [3, 3, 5, 5, 6, 7]
*/

/* 
// CASE 1
function findthemax(arr,len){
   let sum = []
   function loop(){
      let slice = arr.slice(0,len)
      sum.push(Math.max(...slice))
      while(arr.length!=slice.length){
         arr.splice(0,1)
         loop(arr)
      }
   }
   loop(arr)
   console.log(sum)
}
findthemax([1, 3, -1, -3, 5, 3, 6, 7],3) 
*/

//CASE 2
/* function maxele(arr,len){
   let result = []
   let size = arr.length
   for(let i = 0; i <= arr.length - len; i++) {
      let temp = arr[i] //1
      for(let j = 0; j < len; j++) {
            if(arr[i+j] > temp){ //
                  max = arr[i+j]
            }
      }
      result.push(max)
   }
   console.log(result)
}
maxele([4, 2, 1, -3, 5, 3, 6, 7],3) */

//CASE 3
const maxSlidingWindowQueue = function (nums, k) {
      const result = [];
      const deque = [];
    
      for (let i = 0; i < nums.length; i++) {
        
        //[0,1,2]->[1,2,3]
        //   console.log(deque[0],(i - k))
        // this condition slice the first index to next 
        if(deque.length > 0 && deque[0] <= i - k) { //3 <=3-3:0
           deque.shift();
        }
        //   console.log(deque,deque.length-1,i)
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
          deque.pop();
        }
    
        deque.push(i);
        // this condition check is queue length is more the size 
        if (i >= k - 1) { 
          result.push(nums[deque[0]]);
        }
      }
      // console.log(deque)
      // console.log(result)
      // return result;
};
maxSlidingWindowQueue([-1,0,3],3)


/* 
Q2.Find whether an array is subset of another array
Input: arr1[] = {11, 1, 13, 21, 3, 7}, arr2[] = {11, 3, 7, 1} 
Output: arr2[] is a subset of arr1[]
*/

function isSubset(arr1, arr2, m, n){
        let i = 0;
        let j = 0;
        for (i = 0; i < n; i++) {
            for(j = 0; j < m; j++){
               console.log(arr2[i],arr1[j])   
               if(arr2[i] == arr1[j]){
                  break;
               }
                  
            }
            console.log('--',j,m)    
            if(j == m){
               return false;
            }
                
        }
        return true;
}
let arr1 = [ 11, 13, 21, 3, 7, 1];
let arr2 = [ 11, 3, 7, 1 ];

let m = arr1.length;
let n = arr2.length;

// console.log(isSubset(arr1, arr2, m, n))

/* 
Q3.Check if pair with given Sum exists in Array (Two Sum)
Input: arr[] = {0, -1, 2, -3, 1}, x= -2
Output: Yes
Explanation: If we calculate the sum of the output,1 + (-3) = -2

Input: arr[] = {1, -2, 1, 0, 5}, x = 0
Output: No
*/

function chkPair(A , size , x) {
    
   for (i = 0; i < (size - 1); i++) {
       for (j = (i + 1); j < size; j++) {

           if (A[i] + A[j] == x) {
               document.write("Pair with a given sum " + x + " is (" + A[i] + ", " + A[j] + ")");
               return true;
           }
       }
   }

   return false;
}
let A = [ 0, -1, 2, -3, 1 ];
let x = -2;
let size = A.length;
chkPair(A, size, x)


/* 
Q4.Find the length of largest subarray with 0 sum
Given an array arr[] of length N, find the length of the longest sub-array with a sum equal to 0.
Input: arr[] = {15, -2, 2, -8, 1, 7, 10, 23}
Output: 5
Explanation: The longest sub-array with elements summing up-to 0 is {-2, 2, -8, 1, 7}

Input: arr[] = {1, 2, 3}
Output: 0
Explanation: There is no subarray with 0 sum
*/

function maxLen(arr, N)
{
    let max_len = 0;

    // Pick a starting point
    for (let i = 0; i < N; i++) {
        // Initialize curr_sum
        // for every starting point
        let curr_sum = 0;

        // try all subarrays
        // starting with 'i'
        for (let j = i; j < N; j++) {
            curr_sum += arr[j];

            // If curr_sum becomes 0,
            // then update max_len
            if (curr_sum == 0)
                max_len = Math.max(max_len, j - i + 1);
        }
    }
    return max_len;
}
 
// Driver's code
let arr = [15, -2, 2, -8, 1, 7, 10, 23];
let N = arr.length;
 

/* 
Q6.Count distinct elements in every window of size k
Input: arr[] = {1, 2, 1, 3, 4, 2, 3}, K = 4
Output: 3 4 4 3
*/

function countWindowDistinct(win, k)
{
    let dist_count = 0;

    // Traverse the window
    for (let i = 0; i < k; i++) {
        // Check if element arr[i] exists in arr[0..i-1]
        let j;
        for (j = 0; j < i; j++)
            if (win[i] == win[j])
                break;
        if (j == i)
            dist_count++;
    }
    return dist_count;
}

// Counts distinct elements in all windows of size k
function countDistinct(arr, N, K)
{
    // Traverse through every window
    for (let i = 0; i <= N - K; i++)
        document.write(countWindowDistinct(arr.slice(i, arr.length), K) + "<br/>");
}


// Driver program 

  let arr3 = [1, 2, 1, 3, 4, 2, 3], K = 4;

    countDistinct(arr3, arr3.length, K);