/* Q1.Number of island  */
let grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
];

function findLand(arr){
   let visited = arr.map(row=>row.map(col=>false))

   let island =0;
   for (let i = 0; i < grid.length; i++) {
       for (let j = 0; j < grid[i].length; j++) {
            if(dfs(i,j,grid,visited)) island++
       }
       
   }
   function dfs(i,j,grid,visited){
      const stack = [[i,j]]
      
      let isLandSize = 0;
      while(stack.length){
            const [x,y] = stack.pop()
            if(visited[x][y]) continue
            visited[x][y] = true
            if(grid[x][y]==='0') continue
            isLandSize++
            let neighour = getNeighour(i,j,grid,visited)
            stack.push(...neighour)
            
      }
      return isLandSize > 0 ? true : false
   }

  function getNeighour(i,j,grid,visited){
      let temp = []
      if(i > 0 && !visited[i-1][j]) temp.push([i-1,j])
      if(i < grid.length -1 && !visited[i+1][j]) temp.push([i+1,j])

      if(j > 0 && !visited[i][j-1]) temp.push([i,j-1])
      if(j < grid[0].length - 1 && !visited[i][j+1]) temp.push([i,j+1])
      return temp
  }

   return island;
}





/* Q3.Number of provinces */


/* 
Q4.Happy Number
Input: n = 19
Output: True
19 is Happy Number,
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
As we reached to 1, 19 is a Happy Number.

Input: n = 20
Output: False
*/

function isHappy(n){
    function squareofdigit(num){
        let total = 0
        while(num){
          let last = num%10
          num = Math.floor(num/10)
          total += Math.pow(last,2)
        }
        return total
    }
    let slow = n;
    let fast = n;
    while(true){
        fast = squareofdigit(squareofdigit(fast))
        slow = squareofdigit(slow)
        console.log(fast,slow)
        if(slow===fast){
             return fast === 1
        }
    }

}
isHappy(20)
  
