class Pet {
      constructor(name){
         this.name = name
      //    this.age = age
      }
      getName = ()=>{
            return this.name
      }
      getSurname = function(){
            return this.name
      }
      
}

const animal = {
      name:"badru",
      getSurname:function(){
            return this.name  
      },
      getName:()=>{
            return this.name        
      }
}
const Cat = new Pet('Cat')
// console.log(Cat.getName(),Cat.getSurname())
console.log(animal.getName(),animal.getSurname())