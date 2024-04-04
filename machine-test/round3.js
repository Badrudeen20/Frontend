/* 
Q1-Find the missing number in a given integer array of 1 to 100
*/
function missingNo(arr){
   let temp = arr[0]
   for(let i = 0; i < arr.length; i++) {
      if(temp!==arr[i]){
            return temp 
      }
      temp++
      
   }
}
missingNo([1,2,3,4,5,6,7,8,10])

const findMissingNum = (arr)=>{
      for (let i = 0; i < arr.length; i++) {
          if(arr[i]+1 !== arr[i+1]){
            return arr[i]+1
          }
      }
}
findMissingNum([1,2,3,4,5,6,7,8,10])

/* 
Q2-Find a duplicate number in an array of integers
*/
function findDub(arr){
   const obj = {}
   const dub = []
   for (let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]){
            if(obj[arr[i]]===1){
                  dub.push(arr[i])
            }
            obj[arr[i]]++
        }else{
            obj[arr[i]] = 1  
        }
   }
  
}
findDub([1,2,2,2,2,,3,4,5,6,7,7,8,6,10])

/* 
3.Find the largest and smallest number in an unsorted array of integers
*/

function findMaxMin(arr){
      let min = arr[0]
      let max = arr[0]
      for (let i = 0; i < arr.length; i++) {
            if(max < arr[i]){
                  max = arr[i]
            }
            if(min > arr[i]){
                  min = arr[i]
            }
      } 
      
}
findMaxMin([8,5,3,6,6,3,2,6,4,8,63,2])

/* 
4.Return an array showing the cumulative sum at each index of an array of integers
*/

function findCumulative(arr){
  let temp = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
      temp.push(temp[i-1]+arr[i])
  } 
 
}
findCumulative([1,3,5,7])


/* 
Q5-Find all pairs in an array of integers whose sum is equal to a given number
*/

/* 
function findSumPair(arr,pair){
      for (let i = 0; i < arr.length; i++) {
            
      }
}
findSumPair([1,5,6,1,0,1],2) */

let arr = [1,5,6,1,0,1];
const findSumPairs = (arr, value) => {
  let sumsLookup = {};
  let output = [];
  for(let i = 0; i < arr.length; i++) {
    let targetVal = value - arr[i]; 
    
    if(sumsLookup[targetVal]) {
      output.push([arr[i], targetVal]);
    }  
    sumsLookup[arr[i]] = true;
  }
  return output;
}
findSumPairs(arr, 6)


/* 
Q6-Write a program to prints factorial of any number ?
*/
const getFactorial = (inputNum) => {
      let result = 1;
      for(let i=1; i<=inputNum; i++)
      {
          result *= i;
      }
      return result;
  }
getFactorial(5)

/* 
Q7-Write a program to check whether number is perfect number or not ?
*/

const isPerfectNum = (inputNum) => {
      let factSum = 0;
      for(let i=1; i<inputNum; i++)
      {
          if(inputNum % i == 0){
            factSum = factSum+i;
          }
              
              
      }
      return (factSum == inputNum) ? true : false;
  }
  isPerfectNum(6);
/*   console.log(isPerfectNum(10));
  console.log(isPerfectNum(28)); */


  /* 
  Q8-We have group of people in the form of array and you have to group people basis upon age
  */

  let peopleArr = [
      {name: 'A', age: 10},
      {name: 'B', age: 17},
      {name: 'C', age: 14},
      {name: 'D', age: 10},
  ];
  
  let resultObj = {};
  for(let i=0; i<peopleArr.length; i++)
  {
      if(resultObj[peopleArr[i].age]){
         resultObj[peopleArr[i].age].push(peopleArr[i].name); 
      }else{
         resultObj[peopleArr[i].age] = [peopleArr[i].name]; 
      }
  }

  /* 
 Q9- Write a program to find duplicate numbers in an integer array 
  */

 const findDuplicateEle = (inputArr) => {
      let duplicateEleArr = [];
      let uniqueArr = [];
      for(let i=0; i<inputArr.length; i++)
      {
          if(!uniqueArr.includes(inputArr[i]))
              uniqueArr.push(inputArr[i])
          else
              duplicateEleArr.push(inputArr[i])
      }
      return duplicateEleArr;
  }
 findDuplicateEle([1,2,3,5,3,1,9]);
  

 /* 
 Q10-Write a program for check number is prime or not ?
 */
 const isPrime = (inputNum) => {
      let result = true;
      for(let i=2; i<inputNum; i++)
      {
          if(inputNum%i === 0)
              result = false;
              break;
      }
      return result;
  }
isPrime(17)
//console.log(isPrime(18));

