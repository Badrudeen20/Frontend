/* const list:string[] = ['badru','anam','sonam','virat']
function isInList(name:string):boolean{
      return list.includes(name)
}
const user = 'badru'
if(isInList(user)){
      console.log(user +' in the list')
} */

/* function sum(msg:string,...num:number[]):string{
      const add =  num.reduce((acc,cur)=>{
         return acc+cur
      },0).toString()
      return msg+add
}
console.log(sum('The sum:',1,3,4,5)) */

/* function createEmp({id}:{id:number}):{id:number,status:boolean}{
        return {
            id:id,
            status:(id % 2 == 0)
        }
}
console.log(createEmp({id:2}))
console.log(createEmp({id:1})) */

/* function createStu({id,name}:{id:number,name:string}):void{
   console.log(id,name)
}
function createPlayer(player:{id:number,name:string}):void{
   console.log(player)
}

const stu = {
      id:1,
      name:'badru',
      email:'badru@gmail'
}
createStu(stu)
//createPlayer({id:3,name:'anam',email:'anam@gmai'}) */


/* type Book = {
  id:number;
  name:string;
  price:number
}
type BookWithCategory = Book & {
      category:string;
      available:boolean
}
const book:Book = {
    id:342,
    name:'badr',
    price:33
}
const magzin:Book & {discount:boolean} = {
    id:342,
    name:'badr',
    price:33,
    discount:true
} */

/* interface Person {
   readonly id:number;
   name:string;
   age:number;
   adult?:boolean
}
interface Student extends Person{
    class:number;
    stream:string;
}
interface Employee extends Person,Student {
   company:string;
   location:string;
}
interface Person {
      status:boolean;
      getUser(income:number):void
}

const person:Person ={
      id:233,
      name:'badru',
      age:20,
      status:true,
      getUser(income){
            console.log(this.name +" and income "+income)
      }
}
person.getUser(23) */


/* const person:[string,boolean,number] = ['badru',true,20]
enum ServerResponse {
      Success=200,
      Error=500,
}
console.log(ServerResponse)
interface Server {
      result:ServerResponse;
      data:string[]
}
function getConnection():Server{
      //enum does not accept string value
      return {
            result:ServerResponse.Success, 
            data:['badru']
      }
} */

//Type Assertion
let value:any = 'this is badru'
let valLength:number = (value as string).length

enum Status {
      Pending='pending',
      Declined='declined'
}
type User ={
      name:string;
      status:Status
}
const user:User = {
      name:'badru',
      status:'pending' as Status
}

// type never


// type Generic

/* function genericFun<T>(arg:T):T{
    return arg
}
const someString = genericFun<String>('Badru')
const someNumber = genericFun<Number>(2)

interface GenericInterface<T>{
 value:T
 getValue:()=>T
}
const genericString:GenericInterface<Number> = {
      value:20,
      getValue(){
            return this.value
      } 
}
async function promiseFunc():Promise<String>{
       return "badru"
} */

function generateStringArray(length:number,value:string):string[]{
  return Array(length).fill(value);
}
// console.log(generateStringArray(4,'cd'))
function createArray<T>(length:number,value:T):Array<T>{
      return Array(length).fill(value);
}
interface Store<T>{
      data:Array<T>
      list:T[]
}
const store:Store<String> ={
      data:['bad','asd'],
      list:['r','t']
}
// console.log(store)


class Book {
      public readonly title:string;
      author:string;
      private checkout:boolean = false;
      constructor(title:string,author:string){
            this.title = title
            this.author = author
      }
      public check():boolean{
        return this.checkout
      }
      private getTitle():string{
            return this.title
      }

}
const book = new Book('Todo','badru')
