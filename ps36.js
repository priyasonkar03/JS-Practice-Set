/*Write a JavaScript program that checks whether 
the last digit of three positive integers is the same. */
// const numbers = (x,y,z) => {
//     if (x,y,z>0){
//        return (x % 10 === y%10 && y%10 === z%10 && z%10 === x%10 )
//     }
//     else{
//         return false
//     }
// }

//==============Second method
// const numbers = (x,y,z) =>{
//     return (x,y,z>0) ? (x % 10 === y%10 && y%10===z%10 && z%10 === x%10) :false
// }

//==========One line code
const numbers = (x,y,z)=>((x,y,z>0) ? (x % 10 === y%10 && y%10===z%10 && z%10 === x%10) :false)

console.log(numbers(15,40,80));
console.log(numbers(50,40,80));
console.log(numbers(50,458,80));