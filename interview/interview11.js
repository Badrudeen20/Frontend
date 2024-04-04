/*

#
##
###
####

*/
function pattern1(){
      let pattern = ""

     /*  for (let i = 0; i < 5; i++) {
            for (let j = 0; j < i; j++) {
                  pattern+="#"
            } 
            pattern+="\n"
      } */

      for (let k = 0; k < 5; k++) {
            let start = "#"
            console.log(start.repeat(k))
            start = "\n"

      }
      console.log(pattern)
}

// pattern1()

/*
   #
  ##
 ###
####

*/

function pattern2(){
      let pattern = ""

      /* for (let i = 5; i > 0; i--) {
            for (let j = 0; j <= 5; j++) {
                  if(j > i){
                    pattern+="#"
                  }else{
                        pattern+=" "  
                  }
                  
            } 
            pattern+="\n"
      } */
      let n = 1
      for (let k = 5; k > 0; k--) {
            let start = "#"
            let space = " "
            console.log(space.repeat(k),start.repeat(n))
            start = "\n"
            n++

      }
      // console.log(pattern)
}
// pattern2()


/* 

   #
  ###
 #####
#######

*/

function pattern3(){
      let pattern = ""
      let num = 4
      for (let i = 1; i < num; i++) {
            for (let j = 1; j <=(2*num); j++) {
                 if(i+j >= (num+1) && i >=(j-num)+1){
                  pattern += "#"
                 }else{
                  pattern += " "
                 }
            } 
            pattern+="\n"
      }
      console.log(pattern)

     /*  let num = 5
      for (let k = 1; k < num; k++) {
            let str = "#"
            let space = " "
            console.log(space.repeat(num-k)+str.repeat((k*2)-1))
      }  */ 
}
// pattern3()


/* 

#####
 ####
  ###
   ##
    #
*/


function patter4(){
      let pattern = ""
      for (let i = 0; i < 5; i++) {
            for (let j = 1; j < 5; j++) {
                  if(j > i){
                        pattern +="#"
                  }else{
                        pattern +=" " 
                  }
                  
            } 
            pattern+="\n"
      } 
      console.log(pattern)
}
// patter4()


/* 

####
###
##
#

*/

function patter5(){
      let pattern = ""
      for (let i = 1; i < 5; i++) {
            for (let j = 5; j > 1; j--) {
                  if(j > i){
                        pattern +="#"
                  }else{
                        pattern +=" " 
                  } 
            } 
            pattern+="\n"
      } 
      console.log(pattern)
}
//patter5()


/* 

#####
 ###
  #

*/

function pattern6(){
      let pattern = ""
      let num = 5
     for (let i = num; i >=1; i--) {
        for (let j = 1; j<=(num*2); j++) {
            if(i+j >= (num+1) && i >= (j-num)+1){
                  pattern+="#"
            }else{
                  pattern+=" "
            }
        }
        pattern+="\n"
      
     }
      console.log(pattern)

      /* let num = 5
      for (let k = 5; k >= 1; k--) {
            let str = "#"
            let space = " "
            console.log(space.repeat(num-k)+str.repeat((k*2)-1))
      }   */
}
pattern6()



/* 

* * * * * * * * * 
  *           *   
    *       *     
      *   *       
        *  

*/


/* 

*         
* *       
*   *     
*     *   
*       * 
*     *   
*   *     
* *       
*   

*/


/* 

        * 
      * * 
    *   * 
  *     * 
*       * 
  *     * 
    *   * 
      * * 
        * 

*/


/* 

        *         
      *   *       
    *       *     
  *           *   
* * * * * * * * * 

*/