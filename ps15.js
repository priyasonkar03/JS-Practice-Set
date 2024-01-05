//Write a JavaScript program to get the difference between a given number and 13,
//if the number is broader than 13 return double the absolute difference.
//-----------first method
function diff(n) {
    if(n<=13){
        return 13-n;
    }else{
        return(n-13)*2
    }
}
console.log(diff(50));
console.log(diff(3));

//----------second method 
function diff(n) {
    return n <=13 ? 13-n : (n-13)*2;
}
console.log(diff(35));
console.log(diff(3));
//--------third method
// Difference function using arrow function
const difference = (n) => {
    return n <= 13 ? 13 - n : (n - 13) * 2;
  };
  
  // Example usage
  console.log(difference(32));
  console.log(difference(11));