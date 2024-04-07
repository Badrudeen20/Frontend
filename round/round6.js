/* function simulateAsyncOperation(callback) {
      console.log("Start");
      for (let i = 0; i < 1000000000; i++) {}
      console.log("Asynchronous operation completed");
      callback(); 
      console.log("End");
  }
  function afterAsyncOperation() {
      console.log("Continuing with other tasks...");
  }
  simulateAsyncOperation(afterAsyncOperation);
  console.log('badru') */



/* function simulateAsyncOperation(callback) {
      console.log("Start");
      setTimeout(() => {
          console.log("Asynchronous operation completed");
          callback(); 
      }, 2000);
  
      console.log("End");
  }
  function afterAsyncOperation() {
      console.log("Continuing with other tasks...");
  }
  simulateAsyncOperation(afterAsyncOperation);
  console.log("Badru"); */



/*   console.log('start')
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });
  myPromise.then((e)=>console.log(e))
  console.log('end') */




 /*  const asyncoperation = new Promise((res,rej)=>{
    for (let i = 0; i < 1000000000; i++) {}
    res('foo')
  })
  console.log('start')
  async function sol(){
     const res = await asyncoperation
     console.log(res)
  }
  sol()
  console.log('end') */

/* 
  async function person(value){
      if(value){
        return Promise.resolve('r')
      }else{
        return Promise.reject('4')
      }
  }

  const employee = new Promise((res,rej)=>{
       return res('t')
  })

  async function handlePromis(){
        const res = await employee
        console.log(res)

  }
  console.log(person(true),employee) */