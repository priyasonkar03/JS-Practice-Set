/*Write a JavaScript program to compute the absolute difference
between a specified number and 19. Returns triple the absolute
difference if the specified number is greater than 19.  */

//using Arrow functions
const difference = (n) => {
    return n <= 19 ? 19 - n : (n - 19) * 3; //for returs triple
    //return n <= 19 ? 19 - n : (n - 19) * 2; //for returs double
  };
 // Example usage
console.log(difference(22));
console.log(difference(19));


//===second method
function diff(n) {
    return n<=19 ? 19-n : (n-19)*3; //for returns triple
};
console.log(diff(22));
