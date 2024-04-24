/* Stack funtion:push, pop, peek, length */

/*Q1 Find the palindrome using stack  */
/* const word = "racecar"
let rword = ""
let letters = []
for (let i = 0; i < word.length; i++) {
      letters.push(word[i])  
}

for (let i = 0; i < word.length; i++) {
      rword +=letters.pop()
}
console.log(word==rword) */

/* Stack Class */
class Stack {
      constructor() {
            this.items = [];
      }
      
      push(element){
            this.items.push(element);
      }
      
      pop(){
            if (this.items.length == 0 && this.items.isEmpty()) return "Underflow";
            return this.items.pop();
      }
      
      peek(){
            if(this.items.isEmpty()) return "Stack is empty"
            return this.items[this.items.length - 1];
      }
      
      isEmpty(){
            return this.items.length == 0;
      }
      size(){
            return this.items.length;
      }
      
      printStack(){
            var str = "";
            for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
            console.log(str)
            return str;
      }
   
}
var stack = new Stack();


/* 
Question related to stack
Q1.Given an input string s, reverse the order of the words
   using stack
*/

function revstr(str){
  const strarr = str.split("")

  for (const item of strarr) {
      stack.push(item)
  }
  let word = ""
  while(stack.size()){
      const current = stack.pop()
      word += current  
  }
  console.log(word)
}
revstr('badru')

/* 
Q2. Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
    determine if the input string is valid
*/


/* Function Stack */

/* function stack(){
      this.count = 0
      this.storage = {}
      
      this.push = function(data){
         this.storage[this.count] = data
         this.count++
      }
      this.pop = function(){
            if(this.count === 0) return
            this.count--
            var result = this.storage[this.count]
            delete this.storage[this.count]
            return result 
      }
      this.peek = function(){
            return this.storage[this.count-1]
      }
      this.size = function(){
            return this.count
      }
      this.print = function(){
            return this.storage
      }
}
var stackobj = new stack()
stackobj.push(1)
stackobj.push(2)
stackobj.push(1)
console.log(stackobj.print()) */