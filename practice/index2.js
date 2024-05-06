/* 
Q1.Given two sorted arrays, find their union and intersection.
Input: arr1[] = {1, 3, 4, 5, 7}
        arr2[] = {2, 3, 5, 6} 
Output: Union : {1, 2, 3, 4, 5, 6, 7} 
         Intersection : {3, 5}
*/

// CASE 1 MY ANSWER
function uniqueintersect(arr1,arr2){
   const unique = [...new Set([...arr1,...arr2])]
   return {
      "UNIQUE":unique
   }
}
uniqueintersect([1, 3, 4, 5, 7],[2, 3, 5, 6])


/* 
Q2.Check the valid parenthise
*/
function isvalid(string){
   let stack = []
   for(let i = 0; i < string.length; i++) {
      if(string[i]=="(" || string[i]=="{" || string[i]=="["){
         stack.push(string[i])
      }else if(stack.length){
         let open = stack.pop()
         if(string[i]==")" && open !=="(" || 
         string[i]=="}" && open !=="{" || 
         string[i]=="]" && open !=="["){
           return false
         }  
         
      }
   }
   // console.log(stack)
   return stack.length==0

}
isvalid("[{}}]")


/* 
Q3.Given a interger n generate all the valid combination
   of n pair of parentheses
Input:n=3
Outout:["((()))","()()()","(()())","(())()","()(())"]
*/


function generateParentheses(n) {
   const result = [];
   function backtrack(currentString, openCount, closeCount) {
     console.log(openCount,closeCount,currentString,n)
     if(currentString.length === n * 2) {
       
       result.push(currentString);
       return;
     }
     
     if (openCount < n) { //2
       backtrack(currentString + '(', openCount + 1, closeCount);
     }
 
     if (closeCount < openCount) { //1
       backtrack(currentString + ')', openCount, closeCount + 1);
     }
   }
 
   backtrack('', 0, 0)
   console.log('========')
   console.log(result)
   return result;
 }
 generateParentheses(3)