/*Q Palindrome number 
   An interger is palindrome when it read the same
   forward and backword
*/

/* const num1 = 121
   console.log(num1 == num1.toString().split("").reverse().join(""))
 */


/*Q Fibonacci Number 
   0,1,1,2,3,5,8,13,21
*/

/* function fib(length){ 
 let num = []
 let init = 0;
 if(length <  0 ) return length
 while(init < length){
      if(init < 2){
            num.push(init)
      }else{  
            num.push(num[init-2] + num[init-1])
      }
      init++
 }
 return num
}  
fib(12) */
/* function fibonacci(n) { 
      if (n <= 1) { 
          return n; 
      } 
      return fibonacci(n - 1) + fibonacci(n - 2); 
} 
  n = 10 
  for (let i = 0; i < n; i++) { 
      console.log(fibonacci(i),i); 
  }; */

/*Q Is anagram word like  silent == listen */
/*Q Two sum
   input:[3,2,4],target = 6
   output:[1,2] , index
*/


/*Q Find the second largest number from array */
/* function secLargestNumber(arr){
   let largest = Number.NEGATIVE_INFINITY
   let secondLarget = Number.NEGATIVE_INFINITY
   for (let i = 0; i < arr.length; i++) {
      if(arr[i] > largest){
          secondLarget = largest
          largest = arr[i]
      }else if(arr[i]!=largest && arr[i] > secondLarget){
            secondLarget = arr[i]
      }
   }
   return secondLarget
}
secLargestNumber([12,35,1,10,34,1]) */

/*Q Create Start triangle pattern */
/* let length = 4
let str = ''
for(let i = 1; i < length; i++) {
   for(let j = 1; j < 2*length; j++) {
      if(i+j>=(length+1) && i >= (j-length)+1){
         str+='#'
      }else{
         str+=' '
      }
   }
   str +='\n'
} */

/* let n = 5;
for (let i = 1; i < n; i++) {
      let str = '* '
      let space = '  '
      console.log(space.repeat(n-i)+str.repeat((2*i)-1))
}
for (let i = n; i >= 1; i--) {
      let str = '* '
      let space = '  '
      console.log(space.repeat(n-i)+str.repeat((2*i)-1))
}
 */
