//Write a JavaScript program to check two given 
//non-negative integers if one (not both) is a multiple of 7 or 11.  
function checkVal(x,y){
    if (!(x % 7 == 0 || x  % 11 == 0) && (y % 7 == 0 || y % 11 == 0)){
        return ((x % 7 == 0 || x % 11 == 0)||(y % 7 == 0 || y % 11 == 0))
    }
    return false;
}
console.log(checkVal(21,22));
console.log(checkVal(14,20));