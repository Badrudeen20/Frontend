/* setTimeout(()=>{
  console.log('timer')
},0)
new Promise((res,rej)=>{
      for (let i = 0; i < 100000000; i++) {}
      res('promis')
}).then((res)=>{
      console.log(res)
})
console.log('start') */


/* console.log('start')
function promise1(name){
      setTimeout(()=>{
            return name
      })
}
console.log(promise1('p1')) //undefined
console.log('end') */



//Callback
/* console.log('start')
function promise1(name,cb){
      setTimeout(()=>{
            return cb(name)
      })
}
function promise2(name,cb){
      setTimeout(()=>{
            return cb(name)
      })
}
function promise3(name,cb){
      setTimeout(()=>{
            return cb(name)
      })
}
//callback hall
promise1('p1',(msg1)=>{
       console.log(msg1)
       promise2('p2',(msg2)=>{
            console.log(msg2)
            promise3('p3',(msg3)=>{
                  console.log(msg3) 
            })
       })
})
console.log('end') */



function promise1(name){
      return new Promise((res,rej)=>{
            setTimeout(()=>{
                  return res(name)
            },3000)
      })
     
}
function promise2(name){
      return new Promise((res,rej)=>{
            setTimeout(()=>{
                  return res(name)
            },1000)
      })
}
function promise3(name){
      return new Promise((res,rej)=>{
            setTimeout(()=>{
                  return rej(name)
            },500)
      })
}


/* console.log('start')
//promise
promise1('p1').then((res)=>{
      console.log(res)
      return promise2('p2')
}).then(res=>{
      console.log(res)
      return promise3('p3')
}).then(res=>{
      console.log(res) 
}).catch(err=>{
      console.log(err) 
})
console.log('end') */



//promise.all return the reponse in array but only when all promise are settled
/* Promise.all([
      promise1('b1'),
      promise2('b2'),
      promise3('b3')

]).then(res=>{
      console.log(res)
}) */

//promise.race return the first setteled res
/* Promise.race([
      promise1('b1'),
      promise2('b2'),
      promise3('b3')
]).then(res=>{
      console.log(res)
}).catch(err=>{
      console.error(log)
}) */
 

//promise.allSettled return the reponse in array along with the rejected promise
/* Promise.allSettled([
      promise1('b1'),
      promise2('b2'),
      promise3('b3')
]).then(res=>{
      console.log(res)
}).catch(err=>{
      console.error(log)
}) */


//Promise.any only return first fullfiled res and ignore the rejected
/* Promise.any([
      promise1('b1'),
      promise2('b2'),
      promise3('b3')
]).then(res=>{
      console.log(res)
}).catch(err=>{
      console.error(log)
}) */


// Async & Await
/* async function promiseHandler(){
      try {
            const p1 = await promise1('p1')
            console.log(p1)
            const p2 = await promise2('p2')
            console.log(p2)
            const p3 = await promise3('p3')
            console.log(p3)
            // console.log({p1,p2,p3})
      } catch (error) {
            console.error(error)
      }
} 
promiseHandler() */


// Promise output base question


/* 
//Q1
console.log('start')
new Promise((res,rej)=>{
      console.log(1) //it is synchronize at the initize process and print on console
      res(2)
}).then(res=>{
      console.log(res)
})
console.log('end') */



//Q2
/* console.log('start')
new Promise((res,rej)=>{
      console.log(1) //it is synchronize at the initize process and print on console
      res(2)
      console.log(3)
}).then(res=>{
      console.log(res)
})
console.log('end') */

//Q3
/* new Promise((res,rej)=>{
      console.log(1) //it is synchronize at the initize process and print on console
      console.log(3)
      // res()
}).then(res=>{
      console.log(res) //it wont exicuite unless we use resolve and reject parameter on promise
})
console.log('end') */

// Q4
function promise5(){
      return new Promise((res,rej)=>{
            rej()
      })
}
promise5().then(()=>{
      console.log('1')
}).catch(err=>{
      console.log('error')  
}).then(()=>{
      console.log('after then')
})