/*. Write a JavaScript program to check whether two numbers are 
in the range 40..60 or 70..100 inclusive.   */
const g_val = (x,y) =>{
    return((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100)) ? true:false
}
console.log(g_val(46,80));
console.log(g_val(50,95));
console.log(g_val(70,95));