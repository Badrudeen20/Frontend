/* 
Q1.Find the output
*/
function f(x){
      x = "x-"+x
      return function(y){
            y = "y-"+x
            return function(z){
              return "z-"+y
            }
      }
}
console.log(f("a")("b")("c")) // z-y-x-a

