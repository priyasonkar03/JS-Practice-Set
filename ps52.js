//  Write a JavaScript program to convert letters 
//of a given string alphabetically.  
function LetterConvert(str) {
    return str.split("").sort().join("");
}
console.log(LetterConvert("JavaScript"));