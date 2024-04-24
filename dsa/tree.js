/* 
    O
  O   O
O   O

*/

class Node {
      constructor(data,left=null,right=null){
            this.data = data 
            this.right = right
            this.left = left
      }
}

class BST {
      constructor(){
         this.root = null
      }
      add(data){
         const node = this.root
         if(node==null){
            this.root = new Node(data)
            return
         }else{
            const searchTree = function(node){
                 if(data < node.data){
                      if(node.left === null){
                         node.left = new Node(data)
                      }else if(node.left !== null){
                        return searchTree(node.left)
                      }
                 }else if(data > node.data){
                     if(node.right === null){
                        node.right = new Node(data)
                     }else if(node.right !== null){
                       return searchTree(node.right)
                     }
                 }else{
                    return null
                 }
            }
            return searchTree(node)
         }
         
      }
      findMax(){
         let current = this.root
        
            while(current.right){
                  current = current.right
            }
            console.log(current.data)
         
      }
      findMin(){
         let current = this.root
         
            while(current.left){
                  current = current.left
            }
            console.log(current.data)
         
      }
      isPresent(data){
         const current = this.root
         const findNode = function(value,node){
               
               if(node==null) return false
               if(value === node.data) return true
               if(value < node.data){
                  return findNode(value,node.left)
               }else if(value > node.data){
                  return findNode(value,node.right)
               }
         }
         return findNode(data,current)
      }
      remove(data){
            const removeNode = function(value,node){
                  if(node==null) return null
                  if(data == node.data){
                     if(node.left == null && node.right ==null){
                        return null
                     }
                     if(node.left == null){
                        return node.right
                     }
                     if(node.right == null){
                        return node.left
                     }

                     var temp = node.right;
                     while(temp.left){
                        temp = temp.left
                     }
                     node.data = temp.data
                     node.right = removeNode(temp.data,node.right)
                     return node
                  }else if(data < node.left){
                     node.left =  removeNode(value,node.left)
                     return node
                  }else if(data < node.right){
                     node.right = removeNode(value,node.right)
                     return node
                  }
            }
      }
}
const tree = new BST()
tree.add(50)
tree.add(70)
tree.add(20)
tree.add(30)
tree.isPresent(70)