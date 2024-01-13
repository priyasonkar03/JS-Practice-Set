// Write a JavaScript program to check a set of three numbers; 
// if the three numbers are the same return 30;
// otherwise return 20; and if two numbers are the same return 40.  

const threeNums = (x,y,z) =>{
    if (x == y && y==z){
        return 30;
    }
    if(x==y || y==z || z==x){
        return 40;
    }
    return 20;
}
console.log(threeNums(34,34,34));
console.log(threeNums(34,38,35));
console.log(threeNums(8,8,18));
console.log(threeNums(8,8,8));