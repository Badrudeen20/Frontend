// const form  = document.querySelector<HTMLFormElement>("form")
const formId  = document.getElementById("todoForm") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("form input")
const list = document.querySelector<HTMLUListElement>("ul")
type task = {
      id:number;
      name:string;
      complete:boolean;
      createdAt:Date
 }
const tasks:task[] = []
formId?.addEventListener('submit',(e)=>{
      e.preventDefault()
     
      if(input?.value=="" || input?.value==null) return
      const task:task ={
           id:uuid(100),
           name:input.value,
           complete:true,
           createdAt:new Date()
      }
      tasks.push(task)
      addList(task)
      input.value = ""
})

function addList(task:task):boolean{
    const label = document.createElement("label")
    const li = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.checked = task.complete
    label.append(checkbox,task.name)
    li.append(label)
    list?.append(li)
    return true
}

function uuid(len:number):number{
      return Math.floor(Math.random() * len)
}