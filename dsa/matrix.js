/* 
Q1.Given a non null integer matrix Grid of dimensions NxM.Calculate the sum of its elements.
Input:
N=2,M=3
Grid=
[[1,0,1],
[-8,9,-2]]
Output:
1
Explanation:
The sum of all elements of the matrix is 
(1+0+1-8+9-2)=1.
*/
const Grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
  ];
class Solution1 {
      sumOfMatrix(N,M,Grid){
         let sum = 0;
          for (let i = 0; i < N; i++) {
              for (let j = 0; j < M; j++) {
                  sum += Grid[i][j];
              }
          }
          return sum;
      }
  }

/* 
const solution1 = new Solution1();
const N = Grid.length;
const M = Grid[0].length;
const sum = solution1.sumOfMatrix(N, M, Grid);
console.log("Sum of elements:", sum); 
*/


/* 
Q2.Given a square matrix of size N*N, print the sum of upper and lower triangular elements. Upper Triangle consists of elements on the diagonal and above it. The lower triangle consists of elements on the diagonal and below it. 

Input:
N = 2
mat[][] = {{1, 2},
           {3, 4}}
Output: 
7 8
Explanation:
Upper triangular matrix:
1 2
  4
Sum of these elements are 7.
Lower triangular matrix:
1
3 4
Sum of these elements are 8.
*/

/* 
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
*/
class Solution2{
    
    sumTriangles(mat, N){
        let upper = 0
        let lower = 0
        for(let i = 0; i <= N; i++) {
            for (let j = 0; j <= i; j++) {
                  //console.log(mat[i][j])
                  lower+=mat[i][j]
            }
            for (let j = N; j >= i; j--) {
                  upper+=mat[i][j]
            }
        }
        return {
            "UPPER":upper,
            "LOWER":lower
        }
    } 
}

const solution2 = new Solution2();
const sum2 = solution2.sumTriangles(Grid,Grid.length-1)
// console.log(sum2)


/* 
Q3.Write a program to find the transpose of a square matrix of size N*N. Transpose of a matrix is obtained by changing rows to columns and columns to rows.

Input:
N = 4
mat[][] = {{1, 1, 1, 1},
           {2, 2, 2, 2}
           {3, 3, 3, 3}
           {4, 4, 4, 4}}
Output: 
{{1, 2, 3, 4},  
 {1, 2, 3, 4}  
 {1, 2, 3, 4}
 {1, 2, 3, 4}} 
*/


class Solution3 {
   
      transpose(matrix, n){
        for (let i = 0; i <= n; i++) {
             for (let j = 0; j <= i; j++) {
                  let temp = matrix[i][j]
                  matrix[i][j] = matrix[j][i]
                  matrix[j][i] = temp
             } 
             
        }
        return matrix
      }
      
}
/* const solution3 = new Solution3();
const sum3 = solution3.transpose(Grid,Grid.length-1)
 */


/* Reverse the matrix */
class Solution4 {
    reverse(mat,len){
         for (let i = 0; i <= len; i++) {
            for (let j = 0; j < (mat[i].length/2); j++) {
                let row = len-j
                // console.log(i,j,"=",mat[i][j],"AND",i,row,"=",mat[i][row])
                let temp =  mat[i][j] 
                mat[i][j] = mat[i][row]
                mat[i][row] = temp  
            }
           
         }
        //  console.log(mat)
    }
}

const solution4 = new Solution4();
const sum4 = solution4.reverse(Grid,Grid.length-1)


/* 
Q5.Multiply two matrices
input:[
       [1,2],
       [3,4]
      ],
      [
       [1,1],
       [1,1]
      ]

output:[[3,3],
        [7,7]]
*/

class Solution5 {
    multiply(mat1,mat2,res){
        let n1 = mat1.length
        let n2 = mat2.length //row
        let m1 = mat1[0].length //col
        let m2 = mat2[0].length 
        // console.log(n1,n2,m1,m2)
        if(m1==n2){
            for(let i = 0; i < n1; i++) {
               for(let j = 0; j < m2; j++) {
                  res[i][j] = 0; 
                  for(let k = 0; k < m2; k++) {
                    res[i][j] += mat1[i][k] * mat2[k][j]; 
                    console.log(mat1[i][k],mat2[k][j],res[i][j])
                  }
                  console.log('---')
               }  
            }
        }
        console.log(res)
    }
}
const solution5 = new Solution5();
let res = new Array(2); 
for (let k = 0; k < 2; k++){
    res[k] = new Array(2); 
}     
solution5.multiply([
    [1,2],
    [3,4]
   ],[
    [5,6],
    [7,8]
   ],res)