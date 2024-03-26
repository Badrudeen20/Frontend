/* 153 question  */
// console.log([...[..."..."]]) //3
// console.log(Array(5).fill('.'))



const colors = ["red", "yellow", "blue"];
const car = ["audi", "hero", "honda",
"mahindra","suzike","discover"];
// car.splice(2, 0, 'ambassedor', 'BMW', 'Audi'); 
car.splice(2, 1); 
/* 
//colors.reverse()
const c =  colors.toReversed()
console.log(colors,c) */
// car.copyWithin(2,0,3)
// car.pop()
// const r = car.slice(1,4)
//  console.log(car)

/* 
slice()
This method is used to get a new array by selecting a sub-array of a given array.
The changes do not reflect in the original array.

splice()
This method is used to add/remove an item from the given array.
The changes reflect in the original array
*/

/* console.log(Array.from("1234",(x)=>x*x))
console.log(Array.from([1,2,3,4],(x)=>x*x)) */


/* Pattern  */
/* 

#
##
###
####

*/

// let pattern = ''

/* for (let i = 0; i < 5; i++) {
      let str = "*";
      console.log(str.repeat(i))
      for (let j = 0; j < i; j++) {
            document.write('*')
            pattern +='*'
      }
      document.write('<br/>')
      pattern +='\n'
      
}
 */
/* let start = ''
for (let i = 5; i > 0; i--) {
      for (let j = 0; j < i; j++) {
            start +='*'
      }
      start+='\n'
}


/* 

    #
   ##
  ###
 ####

*/


 
// let n = 5
// for (let i = 0; i < n ; i++) {
//      let start = "* "
//      let space = "  "
//      console.log(space.repeat(n-i)+start.repeat(i))
// }
/* let s = ''
for (let i = 5; i > 0; i--) {
     for (let j = i; j > 0; j--) {
         s+=' '
     }
     for (let k = i; k < 6; k++) {
         s+='*'
     }
     s+='\n'
}
console.log(s) */

/* 

#####
 ####
  ###
   ##
    #
*/

/* let n = 5
for (let i = 0; i < n; i++) {
     let start = "* "
     let space = "  "
     console.log(space.repeat(i)+start.repeat(n-i))
} */
/* let s = ''
for (let i = 0; i < 5; i++) {
      for (let j = 0; j < i; j++) {
          s+=' '
      }
      for (let k = 5; k > i; k--) {
          s+='*'
      }
      s+='\n'
}
console.log(s) */