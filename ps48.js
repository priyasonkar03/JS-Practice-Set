//Write a JavaScript program to reverse a given string.  
function string_reverse(str) {
    // Split the string into an array of characters, reverse the order, and join them back into a string
    return str.split("").reverse().join("");
}
console.log(string_reverse("HelloWorld"));