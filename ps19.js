/*Write a JavaScript program to 
check whether a given integer is within 20 of 100 or 400.  */
function test(x) {
    return ((Math.abs(100-x)<=20) || (Math.abs(400-x)<=20))
}
console.log(test(20));
console.log(test(90));
console.log(test(390));

//===second method
function test1(s) {
    if ((Math.abs(100-s)<=20)||(Math.abs(400-s)<=20))
    return true
    else 
    return false
}
console.log(test1(90));

//=========third method using arrow functions
const test2 = (p) => {
    return ((Math.abs(100-p)<=20) || (Math.abs(400-p)<=20))
}
console.log(test2(398));