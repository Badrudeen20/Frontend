//console.log(null == undefined);

//console.log(2 + true);
/* 
When a js execute a + operator with a
number and a boolean, It automatically convert
the boolean to its numeric
*/


//console.log([] == ![]);
/* 
This is an example of a tricky comparison involving truthy and falsy values. The ! operator negates the truthiness of an object. An empty array [] is truthy, so ![] evaluates to false. When comparing [] with false, JavaScript performs type coercion, converting false to a numeric value (0). Thus, the expression becomes [] == 0, and due to another type coercion, the empty array is converted to an empty string '', which is also converted to the numeric value 0. Hence, the expression 0 == 0 evaluates to true.
*/

//console.log([]==[])

//console.log(NaN === NaN);
/* 
NaN (Not a Number) is a special numeric value in JavaScript, and interestingly, NaN is not equal to itself. Therefore, the expression NaN === NaN evaluates to false.
*/

//console.log('5' - - '3');
/* 
The unary - operator can be used to convert a string to a number. In this case, - '3' converts the string '3' to the number -3. Then, the expression becomes '5' - (-3), which is equivalent to '5' + 3. JavaScript performs string concatenation since one of the operands is a string, resulting in the string '53'. Finally, the result is converted to a number, yielding 8.
*/

// console.log('5'- 4, 5 + '4')
// console.log(-'6'+3)

//console.log(null == undefined);
/* 
In JavaScript, null and undefined are considered equal only when using loose equality (==). Therefore, null == undefined evaluates to true.
*/

/* Double elements of an array */
// const arr = [1,2,3]
// const db = arr.reduce((accumulator, currentValue, index, array)=> array[index -1] =array[index -1] *2  )
// console.log(db)

/* const check = Object.prototype.toString.call(new String()) ==='[object String]'
console.log(check) */


/* What will the output */
/* const arr = ['A', 'N', 'U'];
arr[10] = 10;
console.log(arr.length,arr); */

/* How to remove dublicate element from array */

/* const arr = [1,3,5,1,2,4,3,2,4,6,4,2]
console.log([...new Set(arr)]) */

/* let originalArray = [{name:'badre'},{name:'anam'},{name:'virat'}];
let copiedArray = originalArray.slice();
copiedArray.push({name:'rohit'});

for (let i = 0; i < copiedArray.length; i++) {
      delete copiedArray[i].name
      
}
console.log(originalArray);
console.log(copiedArray); */

// Find the longest non repeated string
const str = 'ABCCABABABAB'
function findLongestNonRepeated(string){
    const arr = string.split('')
    let repeat = ''
    let obj = {}
    let num = 0;
    for(let i = 0; i < arr.length; i++) {
         if(repeat==arr[i]){
            num++
         }else{
            repeat = arr[i]
            if(obj[num]){
                  obj[num].push(arr[i])
            }else{
                  obj[num] = [arr[i]]
            }
         }
    }
    let longest = 0
    let longestStr = []
    for(const key in obj) {
        if(obj[key].length > longest){
            longest = obj[key].length
            longestStr = obj[key]
        }
    }
//     console.log(longestStr)
    return longestStr.join('')
}
// findLongestNonRepeated(str)
function findLongestNonRepeated(longestStr){
     let strArr = []
     let subStr = ''
     for(let i = 0; i < longestStr.length; i++) {
       const currentValue = longestStr[i]
     //   console.log(currentValue)
       if(subStr.includes(currentValue)){
            strArr.push(subStr)
            subStr = currentValue
       }else{
            subStr +=currentValue
       }
      
     }
     strArr.push(subStr)

     // console.log(strArr,subStr)
}

findLongestNonRepeated(str)

 /* 
 What would be the result of 3+2+”7″?
 */
// console.log(3+2+"7")
// console.log(NEGATIVE_INFINITY)
// console.log(typeof NULL)

 /* 
 What are the types of Pop up boxes available in JavaScript?
 Alert
 Confirm
 Prompt
 */
