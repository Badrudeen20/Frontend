/* 
Sum of array of element in new array except the index element
EX: const input = [2,7,11,4,-2]
    const output =[20,15,11,18,24]
*/
const input = [2,7,11,4,-2]
function sumOfElment(arr){
   const temp = []
   const length = arr.length
   for(let i = 0; i < length; i++) {
      let sum = 0
      for(let j = 0; j < length; j++) {
            if(i!==j){
                  sum += arr[j]
            }
      }
      temp.push(sum)
   }
   return temp
}
sumOfElment(input)


/* 
Find the common key and value from the obj and another obj
*/
const input1 = {a:1,b:3,c:20,d:2}
const input2 = {a:2,c:20,e:0,d:2,f:3}

function findCommonObj(obj1,obj2){
      const obj = {}
      for(a in obj1){
            for(b in obj2){
              if(obj1[a]==obj2[b] && a==b){
                  obj[a] = obj1[a]
              }    
            }
      } 
      return obj
}
findCommonObj(input1,input2)


/* 
Find the second higest no from array with using one loop  and without using built-in function
*/
const input3 = [1,3,5,2,5,3,-4,7]
function secoundHigestElement(arr,h=null){
      let higest=arr[0]
      for(let i = 0; i < arr.length; i++) {
            if(higest<arr[i] && arr[i]!==h){
                  higest = arr[i]
            }
      } 
      if(h==null){
            secoundHigestElement(arr,higest)
      }else{
            return higest
      }
}
secoundHigestElement(input3)

/* Find the sort odd array element */
const input4 = [11,7,15,17,5,9,7]
function findOdd(arr){ 
    let length = arr.length
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
              if(arr[i] < arr[j]){
                  let temp = arr[i]
                  arr[i] = arr[j]
                  arr[j] = temp
              }  
        } 
    }
    let odd = 0
    for(let k=arr[0];k<arr[length-1];k++){
        if(k%2!==0){
            if(!arr.includes(k)){
                  odd = k
                  break
            }
             
        }
    }
    return odd
    
}
findOdd(input4)

/* Reverse the string */

/* Find the max occuring charactor */
const str = "This is Javascripts Code and you to find max char."
const strArr = str.split("").filter(ele=>ele!==' ')
const obj = {}
for (let i = 0; i < strArr.length; i++) {
      if(obj[strArr[i]]){
            obj[strArr[i]]++
      }else{
            obj[strArr[i]] =1
      }
      
}



/* Guss the output */

function show(){
       const d=b=c=10
       r='badru';
       
}
show()
const obj1 = {
      name:'badr',
      age:30
}
const obj2 = {
     status:true,
     age:90
}

const obj3 = {...obj1,color:'green'}
console.log(obj3,obj1)