/* Find the subarray with the largest sum */
function findSubarray(arr){
 let max = arr[0]
 let start=0;
 let end = 0
 for (let i = 0; i < arr.length; i++) {
      let curr = 0
      for (let j = i; j < arr.length; j++) {
            curr = curr + arr[j]
            // console.log(curr,max)
            if(curr > max){
                  max = curr 
                  start = i
                  end = j
            }  
      }
      
 }
//   console.log(max,arr.slice(start,end+1))
}
// findSubarray([4,-1,2,1,-5,4])

/* let arr = [-2,1,-3,4,-1,2,1,-5,4]
function pattern(length){
      let str = ''
      for (let i = 0; i < length; i++) {
            for (let j = i; j < length; j++) {
                  str +=arr[j]+','
            }
            str+='\n'
            
      }
      console.log(str)
}
pattern(9) */
let arr = [-2,1,-3,4,-1,2,1,-5,4]
let sum = 0
let max = arr[0]
for (let i = 0; i < arr.length; i++) {
      sum +=arr[i] //5
      console.log(sum)
      if(sum > max){
            max = sum
      }
      if(sum<0){
            sum=0
      }
}
// console.log(max)
