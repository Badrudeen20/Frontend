/* 
Q1.Largest Rectangle Area under Histogram
*/
function getMaxRecArea(arr,n){
      var area = 0; 
      for (var i = 0; i < n; i++) { 
          var left_index; 
          var right_index; 
          
          for (var j = i; j >= 0; j--) { //0 >=0
                 // 2  <  5  
              if (arr[j] < arr[i]) { 
                  left_index = j; 
                  break; 
              } 
              
          } 
 
          left_index = j; 
      
          for (var j = i; j < n; j++) { 
              if (arr[j] < arr[i]) { 
                  right_index = j; 
                  break; 
              } 

          } 
         // console.log(arr[i] , right_index , left_index )
          right_index = j; 
          area = Math.max(area, arr[i]  
              * (right_index - left_index - 1)); 
        
      } 
      return area; 
}
var array = [1,2,3,4]; 
getMaxRecArea(array, array.length)
