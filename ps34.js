/*Write a JavaScript program to find the largest number from 
the two given positive integers. 
The two numbers are in the range 40..60 inclusive.  
*/
const numbers = (x,y) =>{
    return ((x <= 40 && x >= 60) || (y <= 40 && y >= 60 )) ? x: y  // when number is able to range
}
//console.log(numbers(45,60));
//=================================*******************========================
//======when the number will same
const max_townums_range = (x, y) => {
    // Check if x and y fall within the specified ranges using logical AND operators
    if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
      // Check if x is equal to y
    //   if (x === y) {
    //     return "Numbers are the same";
    //   } else if (x > y) {
    //     return x;
    //   } else {
    //     return y;
    //   }
    // } else {
    //   return "Numbers don't fit in range";
    // }
    return (x===y) ? "numbers are the same ": 
            (x > y) ? x : y  }
            else{
                return "Numbers don't fit in range"
            }
     }
        // console.log(max_townums_range(60,60));
        // console.log(max_townums_range(20,60));
        // console.log(max_townums_range(45,60));
//====================****************=========================
    
const max_townums_range1 = (x, y) => {
    return (x >= 40 && x <= 60 && y >= 40 && y <= 60)  ? 
    ((x===y) ? "numbers are the same ": 
    (x > y) ? x : y  ) :   "Numbers don't fit in range"
}

console.log(max_townums_range1(45,67));
console.log(max_townums_range1(45,60));

