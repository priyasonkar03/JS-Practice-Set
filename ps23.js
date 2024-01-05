/*Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. 
The string length must be broader than or equal to 1.*/
//==Ex=> Swift by changing(twifS)


//======First method
// const first_last  = (str1) => {
//      return str1.length <=1 ? str1 : 
//      str1.charAt(str1.length-1)+str1.substring(1,str1.length-1)+str1.charAt(0)
// }
//console.log(first_last("Priya"));

//=======second method without return 
    // const first_last  = (str1) => (
    //      str1.length <=1 ? str1 : str1.charAt(str1.length-1)+str1.substring(1,str1.length-1)+str1.charAt(0)
    // )
    // console.log(first_last("Priya"));

//===========third method
function first_last(str2) {
/*    if(str2.length <= 1){
        return str2
    }
    mid_char = str2.substring(1,str2.length-1);
    return str2.charAt(str2.length-1)+mid_char+str2.charAt(0)*/
    //short form
    return str2.length <=1 ? str2 : 
    str2.charAt(str2.length-1)+str2.substring(1,str2.length-1)+str2.charAt(0)
}    
console.log(first_last("RADHARANI"));