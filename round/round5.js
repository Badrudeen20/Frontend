/* const regExpStr = 'Hello world! hello there';
const regExpLiteral = /Hello/gi;
console.log(regExpStr.match(regExpLiteral)); */



/* const arr = ['badrudeen','bad']
const regExpConst = new RegExp(`[^${arr[0]}]`, 'g');
if(arr[1].match(regExpConst)){
      console.log('Not match')
}else{
      console.log('match')
} */



/* let text = "Is this all there is?";
let str = 't'
const regExpConst = new RegExp(`[${str}]`, 'g');
// let pattern = /[]/g;
console.log(text.match(regExpConst)); */


/* 
How to calculate minutes between two dates in JavaScript ?
*/
const date1 = '01/02/2024'
const date2 = '01/01/2024'
function dateFormate(date){
     return new Date(date)
}
// Display the dates
/* let dif = (dateFormate(date1) - dateFormate(date2));
dif = Math.round((dif / 1000) / 60);
console.log("Minutes left: " + dif); */

const diffInMilliseconds = Math.abs(dateFormate(date1) - dateFormate(date2));

// Convert milliseconds to hours
const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
                   // longnumber/
//console.log(diffInDays);


// Convert milliseconds to hours
const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
//console.log(diffInHours);

// Convert milliseconds to hours
const diffInMinutes = diffInMilliseconds / (1000 * 60);
//console.log(diffInMinutes);
 

let today = new Date(); 
today.setDate(today.getDate() + 1); 
let year = today.getFullYear() 
let month = today.getMonth()+1
let day = today.getDate()
month = month.length == 1 ? month.padStart('2', '0') :month; 
day = day.length == 1 ? day.padStart('2', '0') : day;