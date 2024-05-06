/* 
Q1.write a function on show all posible subarray of give
   array element
*/
const arr1 = ['anam','badru']
function main(arr){
      //a,b,f -->0,1,2
      //b,f  -->1,2
      //f    -->2

      function subset(sub,index){
            console.log(sub,index)
            for(let i = index; i < arr.length; i++) {
                  sub.push(arr[i])
                  subset(sub,i+1)
                  sub.pop()
            }
            
      }
      subset([],0)
}
main(arr1)