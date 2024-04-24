class Node {
      constructor(data,head=null){
            this.data= data
            this.next = head;
      }
}
class LinkList {
      constructor(){
            this.head = null,
            this.size = 0
      }

      //insert first node
      insertFirst(data){
           this.head = new Node(data,this.head)
           this.size++
      }
      //insert last node
      insertLast(data){
            
           let node = new Node(data)
           let current;
           if(this.head==null){
                  this.head = node
           }else{
                  current = this.head
                  // console.log(current)
                  while(current.next){
                        current = current.next
                  }
                  //While loop provide the last node or last next key to insert
                  //console.log(current)
                  current.next = node
                  // console.log(node,current)
           }
           this.size++
            
      }
      

      //insert at index
      insertAt(data,index){
            if(index < 0 && index > this.size) return
            let node = new Node(data)
            let current,previous
            current = this.head
            let count = 0;
            while(count < index){
                 previous = current
                 current = current.next
                 count++       
            }
            node.next = current
            previous.next = node
            this.size++
            // console.log(current)

      }

      //print list data
      printData(){
            let current = this.head
            while(current){
                  console.log(current.data)
                  current = current.next
            }
          
      }


}

const list1 = new LinkList()
list1.insertFirst(100)
list1.insertFirst(200)
list1.insertFirst(300)
list1.insertLast(-50)
console.log('All:',list1)
list1.insertAt('badru',1)
// list1.printData()
