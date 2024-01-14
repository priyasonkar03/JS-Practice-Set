//Write a JavaScript program to check from three given numbers (non negative integers) 
//that two or all of them have the same rightmost digit.
function  sameLastDig(x,y,z) {
    return (x % 10 === y %10)||(y%10 === z%10)||(z%10 === x%10);
}
console.log(sameLastDig(22,22,42));
console.log(sameLastDig(22,26,45));