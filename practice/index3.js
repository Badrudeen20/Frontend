/* 
Q1.Find the max sum of each slice element of k size element
*/

function findmaxsumele(arr,len){
      for(let l = 0; l < arr.length; l++) {
            let slice = arr.slice(l,len+l)
            if(slice.length ==3){
                  // console.log(Math.max(...slice))
            }
             
      }
}
findmaxsumele([1, 3, -1, -3, 5, 3, 6, 7],3)

/* 
Q2.find the maximum sum of all subarrays of size K
Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
Output : 39
We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.
*/


function maxsum(arr,len){
   /* let max_sum = 0;
   for (let i = 0; i < len; i++) {
      max_sum += arr[i];
   } */
   let max_sum = arr.slice(0,len).reduce((a,c)=>a+c,0)
   for (let i = len; i < arr.length; i++) {
      let temp = max_sum - arr[i - len] + arr[i];
      // console.log(temp,arr[i - len],arr[i])
      max_sum = Math.max(max_sum, temp);
   }
   // console.log(max_sum)
   return max_sum;
}
maxsum([1, 4, 2, 10, 23, 3, 1, 0, 20],4)


/* 
Q3.Check is valid parathese or not
Input:((){})
Output:True,
Input:(()})
Output:False
*/

function isvalid(str){
   let stack = []
   for(const text of str) {
      if(text=="(" || text=="{" || text=="["){
            stack.push(text)
      }else if(stack.length){
            let pop = stack.pop()
            if(pop=="(" && text !== ")" || 
               pop=="{" && text !== "}" ||
               pop=="[" && text !== "]"){
                  return false
            }
      }
   }
   return stack.length==0
}
isvalid('(()})')

/* 
Q4.Check the longest valid parathese 
Input:")()())"
Output:4,
Explanation: The longest valid parentheses substring is "()()"
*/

function findlongestvalidparam(str){
   let stack = []
   let validparam = ""
   for(const text of str) {
      if(text=="(" || text=="{" || text=="["){
            stack.push(text)
      }else if(stack.length){
            let pop = stack.pop()
            if(pop=="(" && text==")" || pop=="{" && text=="}" || pop=="[" && text=="]"){
                  validparam +=pop+text
            } 
      }
   }
//    console.log(validparam)
   return validparam.length
  
}
findlongestvalidparam("({[]})")


/* 
Question 5: Can you write a function in JavaScript to split an array into chunks of a specified size?
*/
function chunkarr(arr,len){
   //console.log(Array.from({length:arr},(_,i)=>i+1)) 
   return Array.from({length:Math.ceil(arr.length/2)},(_,i)=>arr.slice(i*len,i*len+len))
}
chunkarr([1,2,3,5,5,6,7],2)

/* 
Q6.Start Pattern
#####
 ####
  ###
   ##
    #
*/

function patter6(len){
   // CASE 1
   let str=''
   for (let i = len; i > 0; i--) {
      for (let k = len; k > i; k--) {
         str+=' '
      }
      for (let j = i; j > 0; j--) {
         str+='#'
      }
      str +='\n'
   }
   // console.log(str)


   //CASE 2
   let pattern=''
   for (let i = 0; i < 5; i++) {
      for (let k = 0; k < 5; k++) {
         if(k<i){
            pattern+='🥎'
         }else{
            pattern+='🏀'
         }
         
      }
      pattern +='\n'
   }
   // console.log(pattern)

   // CASE 3
   let star='#'
   let space=' '
   for(let i = len; i > 0; i--) {
      //console.log(space.repeat(len-i),star.repeat(i))
   }
   
}
patter6(5)
/* 
Q7.Start Pattern
#####
 ###
  #
*/

function patter7(len){
   // CASE 1
   let star = ''
   for(let i = 0; i < len; i++) {
      for(let j = 0; j < len*2; j++) {
         //2+4 = 4 && 2 >=(4-3)+1
         if(i+j>=len+1 && i >=(j-len)+1){
            star+='🧊'
         }else{
            star+='  '
         }
         
      }
      star+='\n'
   }
   // console.log(star)

   // CASE 2
   let pattern='🥑'
   let space='  '
   for(let i = 0; i < len; i++) {
      console.log(space.repeat(len-i),pattern.repeat((i*2)+1))
   }
}
// patter7(4)

/* 
Q8.Start Pattern
   #
  ##
 ###
####
*/
function patter8(len){
   // CASE 1
   let star=''
   for (let i = len; i > 0; i--) {
      for (let j = 0; j < len; j++) {
         if(j<i){
            star+='🥙'
         }else{
            star+='🍘'
         }
      }
      star+='\n'
   }
   //console.log(star)

   // CASE 2
   let pattern='🥑'
   let space='  '
   for(let i = 0; i < len; i++) {
      console.log(space.repeat(len-i),pattern.repeat(i))
   }
}
// patter8(5)

/* 
Q9.Start Pattern
        * 
      * * 
    *   * 
  *     * 
*       * 
  *     * 
    *   * 
      * * 
        * 
*/
function patter9(len){

  let star=''
  for(let i = 0; i < len+1; i++) {
   for (let j = len; j > 0; j--) {
      if(j > i){
         star+=' '
      }else{
         // For hollow 
         if(j==i || j==1){
            star+='*'
         }else{
            star+=' '
         }
           
         // star+='*'
         
        
         
      }
   }
   star+='\n'
  }
//   console.log(star)
  for(let i = 0; i < len; i++) {
   for (let j = 0; j < len; j++) {
      if(j > i){
         star+='*'
      }else{
         star+=' '
      }
   }
   star+='\n'
  }
  console.log(star)
}
patter9(5)

/* 
Q10.Start Pattern
        *         
      *   *       
    *       *     
  *           *   
* * * * * * * * * 
*/


