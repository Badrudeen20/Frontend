
/* class Queue {
      constructor() {
          this.items = {}
          this.frontIndex = 0
          this.backIndex = 0
      }
      enqueue(item) {
          this.items[this.backIndex] = item
          this.backIndex++
          return item + ' inserted'
      }
      dequeue() {
          const item = this.items[this.frontIndex]
          delete this.items[this.frontIndex]
          this.frontIndex++
          return item
      }
      peek() {
          return this.items[this.frontIndex]
      }
      get printQueue() {
          return this.items;
      }
     
      isEmpty() {
         return this.items.length == 0;
      }

}
const queneStore = new Queue() */


/* Function Queue */

/* 
const queueStore = new Queue()
queueStore.enqueue(1)
queueStore.enqueue(2)
queueStore.enqueue(3)

function Queue(){
    this.collection = []
   
    this.print = function(){
        return this.collection
        
    }

    this.enqueue = function(data){
        this.collection.push(data)
    }

    this.dequeue = function(){
        return this.collection.shift()
    }
    this.first = function(){
        return this.collection[0]
    }
    this.size = function(){
        return this.collection.length
    }
   

}
 */




class PriorityQueue {
      constructor() {
          this.heap = [];
      }
   
      getLeftChildIndex(parentIndex) {
          return 2 * parentIndex + 1;
      }
   
      getRightChildIndex(parentIndex) {
          return 2 * parentIndex + 2;
      }
   
      getParentIndex(childIndex) {
          return Math.floor((childIndex - 1) / 2);
      }
   
      hasLeftChild(index) {
          return this.getLeftChildIndex(index) < this.heap.length;
      }
   
      hasRightChild(index) {
          return this.getRightChildIndex(index) < this.heap.length;
      }
   
      hasParent(index) {
          return this.getParentIndex(index) >= 0;
      }
   
      leftChild(index) {
          return this.heap[this.getLeftChildIndex(index)];
      }
   
      rightChild(index) {
          return this.heap[this.getRightChildIndex(index)];
      }
   
      parent(index) {
          return this.heap[this.getParentIndex(index)];
      }
   
      swap(indexOne, indexTwo) {
          const temp = this.heap[indexOne];
          this.heap[indexOne] = this.heap[indexTwo];
          this.heap[indexTwo] = temp;
      }
   
      peek() {
          if (this.heap.length === 0) {
              return null;
          }
          return this.heap[0];
      }

      remove() {
          if (this.heap.length === 0) {
              return null;
          }
          const item = this.heap[0];
          this.heap[0] = this.heap[this.heap.length - 1];
          this.heap.pop();
          this.heapifyDown();
          return item;
      }
   
      add(item) {
          this.heap.push(item);
          this.heapifyUp();
      }
   
      heapifyUp() {
          let index = this.heap.length - 1;
          while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
              this.swap(this.getParentIndex(index), index);
              index = this.getParentIndex(index);
          }
      }
   
      heapifyDown() {
          let index = 0;
          while (this.hasLeftChild(index)) {
              let smallerChildIndex = this.getLeftChildIndex(index);
              if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                  smallerChildIndex = this.getRightChildIndex(index);
              }
              if (this.heap[index] < this.heap[smallerChildIndex]) {
                  break;
              } else {
                  this.swap(index, smallerChildIndex);
              }
              index = smallerChildIndex;
          }
      }
}

/* Function Priority Queue */
function priorityQueue(){
    this.collection = []
    this.print = function(){
        return this.collection
    }
    this.enqueue = function(data){
        if(this.isEmpty()){
              this.collection.push(data)
        }else{
           let added = false
           for (let i = 0; i < this.collection.length; i++) {
               if(data[1] < this.collection[i][1]){
                  this.collection.splice(i,0,data)
                  added = true
                  break;
               }
           }
           if(!added){
              this.collection.push(data)
           }
        }
    }
    this.isEmpty = function(){
        return this.collection.length === 0
    }
    this.print = function(){
         return this.collection
    }
}
const priorityStore = new priorityQueue()
priorityStore.enqueue(["badru deen",1])
priorityStore.enqueue(["vijay",2])
priorityStore.enqueue(["virat",2])
priorityStore.enqueue(["rohit",3])
console.log(priorityStore.print())