/*Write a JavaScript program to create another string from a given string with 
the first character of the given string added to the front and back. */

// const front_back = (str1) => {
//     const first = str1.substring(0,1)    
//     return first + str1 + first
// }
// console.log(front_back("Priya"));

//==Short form

const front_back = (str1) => (
    str1.substring(0,1) + str1 + str1.substring(0,1)
    //str1.substring(0,1) + str1 + str1.substring(0,2)  //output PPriyaPr
    //str1.substring(1,1) + str1 + str1.substring(1,2)  //output Priyar
)
console.log(front_back("Priya"));