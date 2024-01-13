//Write a JavaScript program to check whether three given numbers 
//are increasing in strict or in soft mode.
//Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

const numOrder = (x,y,z)=>{
    return (y>x && z>y) ? `Strict Mode` : (z>y) ? `Soft mode` :`Undefined`; 
}
console.log(numOrder(10,15,31));
console.log(numOrder(24,22,31));
console.log(numOrder(22,22,31));
console.log(numOrder(2,5,1));
