/*Write a JavaScript program to create another string by adding "Py" in front of a given string. 
If the given string begins with "Py" return the original string. */

//===========First method
//const string_check = (str1) => (
  //  str1===null || str1 ===undefined || str1.substring(0,2) ==="Py" ? str1 :`py${str1}`)
//console.log(string_check("thon"));
//console.log(string_check("Python"));

//second method
function string_check(str2) {
  return str2===null || str2 ===undefined || str2.substring(0,2) ==="Py" ? str2 :`py${str2}`  
}
console.log(string_check("thon"));
console.log(string_check("Python"));