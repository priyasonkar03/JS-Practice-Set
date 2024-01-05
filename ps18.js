/* Write a JavaScript program to check a pair of numbers and 
return true if one of the numbers is 50 or if their sum is 50.*/

const sum = (x,y) => {
    return (x == 50 || x+y == 50);
}
console.log(sum(20,50));
console.log(sum(50,50));
console.log(sum(30,20));