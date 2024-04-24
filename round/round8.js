// Debouncing
/* window.addEventListener('resize',function(e){
      implementDebounce(e)
})

function debounce(cb,delay=1000){
      let timer;
      return function(...arg){
          clearTimeout(timer)
          timer = setTimeout(()=>{
            cb(...arg)
          },delay) 
      }
}

let implementDebounce = debounce((event)=>{
  console.log(event)
},1000) */



/* const text = document.querySelector('input')
text.addEventListener('input',function(e){
      implementDebounce2(e.target.value)
})

async function productApi(search){
 const res = await fetch('https://dummyjson.com/products/search?q='+search)
 const data = await res.json()
 return data
}

function debounce2(cb,delay=500){
      let timer;
      return function(...arg){
         clearTimeout(timer)
         timer = setTimeout(()=>{
             cb(...arg)
         },delay)
      }
}


const implementDebounce2 = debounce2((val)=>{
      productApi(val).then(res=>{
            console.log(res)
      })
},1000)
 */


//Throttling
/* async function productApi(){
      const res = await fetch('https://dummyjson.com/products/')
      const data = await res.json()
      return data
}

setInterval(() => {
      implementThrottle()
}, 1000);


function throttle(cb,delay){
    let wait = false
    return function(){
       if(wait){
         return
       }
       cb()
       wait = true
       setTimeout(()=>{
            wait = false
       },delay)
    }
}

const implementThrottle = throttle(()=>{
      productApi().then(res=>{
            console.log(res)
      })
}) */


/* Create a clock */

/* (function(){
   let time = 0
   
   
   setInterval(()=>{
      const timer = new Date()
      let h = timer.getHours()
      let m = timer.getMinutes()
      let s = timer.getSeconds() 
      clock.innerHTML = h+":"+m+":"+s
   },10)
})() */

/* function createStopwatch() {
      const clock = document.querySelector('#timer')
      let startTime;
      let running = false;
      let intervalId;
  
      function start() {
          if (!running) {
              startTime = Date.now();
              intervalId = setInterval(update, 10); // Update every 10 milliseconds
              running = true;
          }
      }
     
      function stop() {
          clearInterval(intervalId);
          running = false;
      }
  
      function reset() {
          clearInterval(intervalId);
          running = false;
          startTime = null;
          update();
      }
  
      function update() {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTime;
          const formattedTime = formatTime(elapsedTime);
          clock.innerHTML= formattedTime
      //     console.log(formattedTime);
      }
  
      function formatTime(time) {
          const totalMilliseconds = time;
          const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);
          const seconds = Math.floor((totalMilliseconds / 1000) % 60);
          const minutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60);
          const hours = Math.floor((totalMilliseconds / (1000 * 60 * 60)) % 24);
          
          return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
      }
  
      function pad(value) {
          return value < 10 ? '0' + value : value;
      }
  
      return {
          start,
      //     stop,
      //     reset
      };
  }
   */
  // Create a stopwatch
//   const stopwatch = createStopwatch();
  
  // Start the stopwatch
  //stopwatch.start();
  
  // Stop the stopwatch after 5 seconds
 /*  setTimeout(() => {
      stopwatch.stop();
  }, 5000); */
  
  // Create a counter with a timer
  // const counterTimer = createCounterTimer(1000); // Interval set to 1000ms (1 second)
  
  // Start the counter timer
//   counterTimer.start();
  
  // Stop the counter timer after 5 seconds
/*   setTimeout(() => {
      counterTimer.stop();
  }, 5000); */

  function stopwatch(){
    const clock = document.querySelector('#timer')
    let inter;
    function start(){
        let starttimer = Date.now()
        inter = setInterval(()=>{
         let current = Date.now()
         let dif = current - starttimer
         let timeformate = formate(dif)
         clock.innerHTML= timeformate
        //  console.log(timeformate)
        },10)
    }

   
   
    function formate(totalMilliseconds){
        const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);
        const seconds = Math.floor((totalMilliseconds / 1000) % 60);
        const minutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60);
        const hours = Math.floor((totalMilliseconds / (1000 * 60 * 60)) % 24);
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    }

    function pad(time){
        return time<10?'0'+time:time
    }

    function stop(){
        clearInterval(inter)
    }

    return {
        start,
        stop
    }
      
  }
//   const watch =  stopwatch()
//   watch.start()



