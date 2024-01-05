/*Write a JavaScript program to check whether a 
string starts with 'Java' if it does not otherwise.*/
// const language = (str1) =>{
//     //str1.substring (0,4) the first four characters of str
//     return str1.substring(0,4) == "Java" ? true : false
// }

//========Second method
const language = (str1) =>(str1.substring (0,4) == 'Java' ? true : false)
console.log(language("Javascript"));


//console.log(language("Javascript"));
console.log(language("Java"));
console.log(language("Python"));
console.log(language("JS"));