//Write a JavaScript program to check whether a given number exists 
//in the range 40..10000.
//For example 40 presents in 40 and 4000.
// function testDigit(x,y,n){
//     if (n < 40 || n>1000){
//         return true
//     }
//     else if(n >= x && n <= y){
//         return true
//     }
//     else{
//         return false
//     }
// }

const testDigit = (x,y,n) =>{
    return (n<40 || n>1000) ? true : (n>=x && n <= y) ? true :false
}
console.log(testDigit(15,40,193));
console.log(testDigit(40,4000,193));
