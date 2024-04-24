// HashTable Implementation
class HashTable {
      constructor() {
          this.table = new Array(10);
          this.size = 0;
      }
   
      #setKey(key) {
          return key % 10;
      }
   
      insert(value) {
          const index = this.#setKey(value);
          this.table[index] = value;
          this.size++;
      }
   
      get(key) {
          const target = this.#setKey(key);
          return this.table[target];
      }
   
      search(value) {
          const index = this.#setKey(value);
          if (this.table[index] == value)
              console.log("The value is found at index : ", index);
          else
              console.log("Not found");
      }
   
      delete(key) {
          const index = this.#setKey(key);
   
          if (this.table[index]) {
              this.table[index] = [];
              this.size--;
              return true;
          } else {
              return false;
          }
      }
}
const htable = new HashTable()

function hash(string,max){
      var hash = 0
      for (let i = 0; i < string.length; i++) {
           hash +=string.charCodeAt(i)
      }
      return hash % max
}
function hashTable(){
      this.storage = []
      this.limit = 4

      this.print = function(){
            console.log(this.storage)
      }

      this.add = function(key,value){
          let index = hash(key,this.limit)
          if(this.storage[index]===undefined){
                  this.storage[index] = [
                        [key,value]
                  ]
          }else{
              let inserted = false;
              for (let i = 0; i < this.storage[index].length; i++) {
                  if(this.storage[index][i][0]===key){
                           this.storage[index][i][1] = value
                           inserted = true
                  }
              }
              if(!inserted){
                  this.storage[index].push([key,value])
              }
          }
      }

      this.remove = function(key){
        const index = hash(key,this.limit)
        console.log(this.storage[index])
        if(this.storage[index].length===1 && this.storage[index][0][0]===key){
            delete this.storage[index]
        }
        else{
            for (let i = 0; i < this.storage[index].length; i++) {
                if(this.storage[index][i][0]===key){
                    delete this.storage[index][i][0]
                }
                
            }
        }
      }
}

const ht = new hashTable()
ht.add('anam','done')
ht.add('badru','good')
ht.remove('badru')
// ht.print()