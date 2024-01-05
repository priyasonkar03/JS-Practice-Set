/*29. Write a JavaScript program to check whether 
three given integer values are in the range 50..99 (inclusive).
 Return true if one or more of them are in the specified range. */ 


const g_val = (num1,num2,num3) =>{
    return (num1>=50 && num1<=99 || num2>=50 && num2<=99 ||num3>=50 && num3<=99) ? true:false
}
// console.log(g_val(46,80,12));
// console.log(g_val(12,101,5));
// console.log(g_val(55,90,2));
console.log(g_val(65,89,199));
console.log(g_val(5,9,199));
console.log(g_val(40,45,199));
