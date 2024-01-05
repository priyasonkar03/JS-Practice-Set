//Write a JavaScript program to calculate the days left before Christmas.
const today = new Date();
const Christmas = new Date(today.getFullYear(),11,25) // 5 is a month and 1 is a date objects
if (today.getMonth()==11 && today.getDate()==25){
    Christmas.setFullYear(Christmas.getFullYear()+1);
}
// Calculate the difference in days between today and Christmas
var one_day = 1000 * 60 * 60 * 24;

// Log the number of days left until Christmas to the console
console.log(Math.ceil((Christmas.getTime() - today.getTime()) / (one_day)) +
    " days left until Christmas!"); 

//============or=====
//Write a JavaScript program to calculate the days left before New Year.
//const today = new Date();
const nyear = new Date(today.getFullYear(),5,1)  // 5 is a month and 1 is a date objects
if (today.getMonth()==5 && today.getDate()==1){
    nyear.setFullYear(nyear.getFullYear()+1);
}
// Calculate the difference in days between today and Christmas
var one_day = 1000 * 60 * 60 * 24;

// Log the number of days left until Christmas to the console
console.log(Math.ceil((nyear.getTime()-today.getTime()) / (one_day)) +
    " days left until New Year!"); 
    