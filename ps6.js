//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  
function leapyear(year){
    return  (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
//console.log(leapyear(2015));
//console.log(leapyear(2025));
//console.log(leapyear(2040));

//==========Second method
function isleapyear(year) {
    if(year % 4 !== 0){
        return false
    }
    if (year %100 ===0 && year%400 !== 0){
        return false
    }
    return true
    }
console.log(isleapyear(2024));  //o/p false
console.log(isleapyear(2026));  //o/p true