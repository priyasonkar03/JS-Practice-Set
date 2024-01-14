// Write a JavaScript program that checks two integer values and 
//returns true if either one is 15 or if their sum or difference is 15.  
function twoNums (x,y){
    return (x===15 || y===15 || x+y === 15 || Math.abs(x - y) === 15);
}
console.log(twoNums(7,8));
console.log(twoNums(15,9));
console.log(twoNums(25,10));