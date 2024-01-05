/*Write a JavaScript program to check whether a string "Script" appears 
at the 5th (index 4) position in a given string. If "Script" appears in the string,
return the string without "Script" otherwise return the original one.


/*========First Method
const language = (str1) =>(
    str1.substring (10,4) == "script"? str1.substring(0,4)+str1.substring(10,str1.length) : false)
console.log(language("Javascript"));*/

//=======Second method
// function check_script(str)
// {
//   if (str.length < 6) {
//     return str;
//   }
//   let result_str = str;
    
//   if (str.substring(10, 4) == 'Script') 
//     {
    
//     result_str = str.substring(0, 4) + str.substring(10,str.length);
      
//   }
//   return result_str;
// }

// console.log(check_script("JavaScript"));
// console.log(check_script("CoffeeScript"));

//=======Short form of function 
function check_script(str) {
    // if (str.length < 6){
    //     return str;
    // }
    //return (str.substring(10, 4) == 'Script') ? str.substring(0, 4) + str.substring(10,str.length): false
    
    //=====or short form
    return (str.length < 6) ? str : (str.substring(10, 4) == 'Script') ? str.substring(0, 4) + str.substring(10,str.length):false
}
    
 
    
    

console.log(check_script("JavaScript"));