/*Write a JavaScript program to create a string from a given string. 
This is done by taking the last 3 characters and 
adding them at both the front and back. 
The string length must be 3 or more. */

//==========first method
const front_back = (str1) => (
    str1.substring(2) + str1 + str1.substring(2)
    //str1.substing is front(3) and back (3) define in tha function 
    //str1.substring(-2) + str1 + str1.substring(-2)
)
console.log(front_back("Swift"));
console.log(front_back("abc"));
console.log(front_back("abcde"));