//Write a JavaScript program to capitalize the first letter of each 
//word in a given string.
function capital_letter(str) {
    str = str.split(" ");
    for (var i = 0 , x=str.length; i< x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);       
    }
    return str.join(" ");
}
console.log(capital_letter("hello world")); //O/P :- Hello World

//Each Word capital 
function EachCapital_letter(str) {
    str = str.split("");
    for (let i = 0; i<str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);       
        // str[i] = str[i][0].toLowerCase() + str[i].substr(1);       //Each word Lower
    }
    return str.join("");
}
console.log(EachCapital_letter("hello world")); //O/P :- HELLO WORLD
console.log(EachCapital_letter("HELLO WORLD")); //O/P :- hello world //Each word Lower  for o/p


