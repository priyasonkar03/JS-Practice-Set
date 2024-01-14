// Write a JavaScript program to check from three given integers whether
// a number is greater than or equal to 20. It is less than the others.  
function threeNums(x,y,z){
    return(x >= 20 && (x<y|| x<z)|| 
    y>=20 && (y<x||y<z) || 
    z>=20 && (z<x||z<y))
}
console.log(threeNums(25,28,59));
console.log(threeNums(5,2,91));