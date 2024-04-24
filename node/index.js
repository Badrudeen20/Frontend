/* const { exec } = require('child_process'); */
/* 
Counts the number of directory in current working directory
*/



/* exec('dir | find /c /v ""', (error, stdout, stderr) => {
      if (error) {
          console.error(`exec error: ${error}`);
          return;
      }
      console.log(`stdout: No. of directories = ${stdout}`);
      if (stderr != "")
          console.error(`stderr: ${stderr}`);
}); 
*/



/* Spawn */

/* const { spawn } = require('child_process');
const child = spawn('dir', ['D:\Test'],
		{ shell: true }
	);
child.stdout.on('data',(data) => {
		console.log(`stdout: ${data}`);
	});

child.stderr.on('data',(data) => {
		console.error(`stderr: ${data}`);
	});

child.on('close',(code) => {
		console.log(
			`child process exited with code ${code}`
	);
});
 */


// Write Javascript code here
/* const cp = require('child_process');
 
let child = cp.fork(__dirname + '/sub.js');
 
child.on('message', function (m) {
    console.log('Parent process received:', m);
});
 
child.send({ hello: 'from parent process' });
 
child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
}); */

/* console.log('start')
import { name, done} from "./module.js"
console.log(done)
console.log('end') */


/* 
Find the missing no
*/
function missingNumber(arr){
    let sum = arr.reduce((a,c,i)=>{
           return a + c
    },0)
    let max = Math.max(...arr)
    let exp = 0
    for(let i = 0; i <=max; i++) {
          exp+=i
    }
    // console.log(exp-sum)
}
missingNumber([5, 2, 6, 1, 3]);

let a = 2
let b = 3
b = b -a;
a = a+ b;
b = a-b;
console.log(a,b)


