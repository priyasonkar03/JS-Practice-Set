//Write a JavaScript program to check from two given integers 
//whether one of them is 8 or their sum or difference is 8.
const twoNums = (x,y) => {
    return  ((x == 8 || y == 8)||(x + y == 8 || Math.abs(x - y) == 8)) ? true : false
}
console.log(twoNums(32,24));
console.log(twoNums(32,8));
console.log(twoNums(7,8));
console.log(twoNums(24,32));
console.log(twoNums(16,20));
console.log(twoNums(17,18));