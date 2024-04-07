// Write a function that return the reverse of a string
const str1 = "Badrudeen ansary"
//console.log(str1.split("").reverse().join(""))
function reverse_str(str){
    let revstr = ''
    for(word of str){
      revstr = word + revstr 
    }
    return revstr
}
reverse_str(str1)
// Write a function that return the reverse of a number
