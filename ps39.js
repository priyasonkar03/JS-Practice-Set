//Write a JavaScript program to compute the sum of the two given integers.
// If the sum is in the range 50..80 return 65 otherwise return 80. 
const twoNums = (num1,num2) => {
    return (num1+num2 >= 50 && num1+num2 <= 80) ? 65 : 80
}
console.log(twoNums(28,28));
console.log(twoNums(30,20));
console.log(twoNums(50,35));
