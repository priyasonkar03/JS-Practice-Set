//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, 
//then return triple their sum.
function sumtriple(x,y) {
    return x==y ? (x+y)*3 : x+y
}
console.log(sumtriple(10,25));
console.log(sumtriple(10,10));
//===========second method
// Using ES6 arrow function syntax to define the sumTriple function
const sumTriple = (x, y) => {
    // Check if x is equal to y
    if (x == y) {
      // If true, return three times the sum of x and y
      return 3 * (x + y);
    } else {
      // If false, return the sum of x and y
      return (x + y);
    }
  };
  
  // Log the result of calling the sumTriple function with the arguments 10 and 20 to the console
  console.log(sumTriple(20, 20));
  
  // Log the result of calling the sumTriple function with the arguments 10 and 10 to the console
  console.log(sumTriple(10, 10));


//==third method
const sumriple = (x, y) => {
    return x==y ? 3*(x+y): x+y} ;
    console.log(sumriple(20,25));
    console.log(sumriple(20,20));

