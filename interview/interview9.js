/* Reverse String & Integers  */
//part 1
function reverseStr(str){
      return str.split('').reverse().join("")
}
reverseStr('badru')
//part 2
function strRev(str){
   let rev = ''
   for(let word of str){
       rev = word + rev 
   }
   return rev
}
strRev('badru')

//first way
function revNum(num){
      let rev = num.toString().split('').reverse().join('')
      return parseInt(rev) * Math.sign(num)
}
revNum(-423)

function revNo(num){
   let rev = 0
   let sign = Math.sign(num)
   num = Math.abs(num)
   while(num > 1){
      rev = rev*10 + num%10
      num = Math.floor(num/10)
   }
   return rev * sign
}
revNo(-243)


// Find Max Charactor
function maxChar(str){
      let temp = {}
      for(let word of str){
            if(temp[word]){
                  temp[word] = temp[word]+1
            }else{
                  temp[word] = 1
            }
      }
      return temp
}
maxChar('badrudeen')
// console.log(Object.entries(''))

//Find the secound highest number from array without using in-built method
const arr1 = [-22,-14,-9,-7,-1,-14,-15]
const arr2 = [10, 9, 8, 7, -1, -5, 11, 5, 7, 6, 5, 3];

function sortArr(arr){
      let i = 0
      let length = arr.length
       while(i < length){
            let j = i+1
            while(j < length){
                  if(arr[j] < arr[i]){
                        let temp = arr[i]
                        arr[i] = arr[j]
                        arr[j] = temp
                  }
                  j++
            }
            
            i++
       }
       return arr[length-2]
}

//Remove dublicate array witout using in -built function
function removeDul(arr){
      let temp = []
    for (let i = 0; i < arr.length; i++) {
         if(!temp.includes(arr[i])){
                temp.push(arr[i])
         }
    }   
    return temp
}
removeDul(arr1)


let person = {
      firstname:'badru',
      age:20
}
person.sayHello = function(){
       alert('Hello '+this.firstname)
}
//person.sayHello()

function Person(){    
      this.firstname='badru',
      this.age=20
}
Person.prototype.sayHello = function(){
      alert('Hello '+this.firstname)
}
var per = new Person()
//console.log(per.sayHello());

//Create fibonacci Sequence
function fibonacciSequence(numTerms) { 

      if (numTerms <= 0) return []; 
      if (numTerms === 1) return [0]; 

      let sequence = [0, 1]; 
      while (sequence.length < numTerms) { 
        let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]; 
        sequence.push(nextNumber); 
    
      } 
      return sequence; 
} 
fibonacciSequence(40)


//Given an array and chunk size, divide the array into subarray
// chunk([1,4,2,5,6,4,7,8],2) ---> [[1,4],[2,5],[6,4],[7,8]]
function chunk(arr,size){
 let temp = []
 let index = 0;  
 let chunk = size
 while(index < arr.length){
      temp.push(arr.slice(index,size))
      index += chunk
      size += chunk
 }
 return temp
}
chunk([1,4,5,7,3,8,9,3,8],2)


//Built a pyramid


function pyramid(n) {
      for (let i = 1; i <= n; i++) {
        let str = ' '.repeat(n - i);
        let str2 = '#'.repeat(i * 2 - 1);
        console.log(str + str2 + str);
      }
    }
    pyramid(3)

let n = 5; 
for (let i = 1; i <= n; i++) { 
    let str = "* "; 
    let space = '  '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
}


/* 

let n = 5; 
for (let i = n; i >= 1; i--) { 
    let str = "* "; 
    let space = '  '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
}
*/


/* 


let n = 5;
for (let i = 1; i <= n; i++) {
    let str = '';
    let count = 1;
    for (let j = 1; j <= 2 * n; ++j) {
        if (i + j >= n + 1 && (i >= j - n + 1)) {
            // Add a space after each number
            str += count.toString() + ' ';
            count++;
        } else {
            // Add two spaces for the gap
            str += '  ';
        }
    }
 
    console.log(str);
}
*/


/* 

let n = 5;
for (let i = n; i >= 1; i--) {
    let str = '';
    let count = 1;
    for (let j = 1; j <= 2 * n; ++j) {
        if (i + j >= n + 1 && (i >= j - n + 1)) {
            // Add a space after each number
            str += count.toString() + ' ';
            count++;
        } else {
            // Add two spaces for the gap
            str += '  ';
        }
    }
 
    console.log(str);
};

*/

// Reverse Floyd Pattern Triangle Pyramid
/* 
function myFunction(rows) {
    let num = rows * (rows + 1) / 2;
    for (let i = rows; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += num-- + ' ';
        }
        console.log(pattern);
    }
}
 
myFunction(5);

*/
// Using Recursion


/* 

function myFunction(rows, num = rows
    * (rows + 1) / 2) {
    if (rows === 0) return;
    let pattern = '';
    for (let i = 1; i <= rows; i++) {
        pattern += num-- + ' ';
    }
    console.log(pattern);
    myFunction(rows - 1, num);
}
 
myFunction(6);

*/


// Pascal’s Pattern Triangle Pyramid
// Using Recursion

/* 
function printPascalsPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let output = '';
        for (let j = 0; j <= i; j++) {
            output += pascalNumber(i, j) + ' ';
        }
        console.log(output);
    }
}
 
function pascalNumber(row, column) {
    if (column === 0 || column === row) {
        return 1;
    } else {
        return pascalNumber(row - 1, column - 1) +
            pascalNumber(row - 1, column);
    }
}
 
printPascalsPyramid(5);

*/

// Using Binomial Coefficients

/* 

function printPascalsPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let output = '';
        for (let j = 0; j <= i; j++) {
            output += binomialCoefficient(i, j) + ' ';
        }
        console.log(output);
    }
}
 
function binomialCoefficient(n, k) {
    let res = 1;
    if (k > n - k) {
        k = n - k;
    }
    for (let i = 0; i < k; ++i) {
        res *= (n - i);
        res /= (i + 1);
    }
    return res;
}

*/


//Hollow Pyramid Star Pattern
/* 
        *         
      *   *       
    *       *     
  *           *   
* * * * * * * * * 
let n = 5; 
for (let i = 1; i <= n; i++) { 
    let str = ''
    for(let j = 1; j <= 2*n-1 ; ++j){ 
        if(i+j == n +1||(i+n==j+1) ||i==n) 
        str+='* '; 
        else
        str+='  '; 
    } 
    console.log(str); 
}

* * * * * * * * * 
  *           *   
    *       *     
      *   *       
        *    


let n = 5; 
for (let i = n; i >= 1; i--) {     
   let str = ''
    for(let j = 1; j <= 2*n-1 ; ++j){ 
        if(i+j == n +1||(i+n==j+1) ||i==n) 
        str+='* '; 
        else
        str+='  '; 
    } 
    console.log(str); 
}




*         
* *       
*   *     
*     *   
*       * 
*     *   
*   *     
* *       
*   

let n = 5; 
for (let i = 1; i <= n; i++) { 
    let str = ''
    for(let j = 1; j <= n ; ++j){ 
        if(i==j||j==1) 
        str+='* '; 
        else
        str+='  '; 
    } 
  
    console.log(str); 
} 
for (let i = n-1; i >= 1; i--) {     
  let str = ''
    for(let j = 1; j <= n ; ++j){ 
        if(i==j||j==1) 
        str+='* '; 
        else
        str+='  '; 
    } 
    console.log(str); 
}


       * 
      * * 
    *   * 
  *     * 
*       * 
  *     * 
    *   * 
      * * 
        * 


let n = 5; 
for (let i = 1; i <= n; i++) { 
    let str = ''
    for(let j = 1; j <= n ; ++j){ 
        if(i+j==1+n||j==n) 
        str+='* '; 
        else
        str+='  '; 
    } 
  
    console.log(str); 
} 
for (let i = n-1; i >= 1; i--) {     
  let str = ''
    for(let j = 1; j <= n ; ++j){ 
        if(i+j==n+1||j==n) 
        str+='* '; 
        else
        str+='  '; 
    } 
    console.log(str); 
}

*/