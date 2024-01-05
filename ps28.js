/*Write a JavaScript program to check whether two given 
integer values are in the range 50..99 (inclusive). 
Return true if either of them falls within the range. */

//==========for given value with parameter one
// const g_val = (num) =>{
//     return (num>=50 && num<=99) ? true:false
// }
// console.log(g_val(46));
// console.log(g_val(55));

const g_val = (num1,num2) =>{
    return (num1>=50 && num1<=99 || num2>=50 && num2<=99 ) ? true:false
}
console.log(g_val(46,80));
console.log(g_val(12,101));
console.log(g_val(55,90));

