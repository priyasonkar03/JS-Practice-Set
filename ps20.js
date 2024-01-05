/*Write a JavaScript program to check two given integers 
whether one is positive and another one is negative.*/
function positive_num(x,y) {
    if ((x<0 && y>0) || (x>0 && y<0 )){
        return true
    }else{
        return false
    }

}
console.log(positive_num(-2,2));
console.log(positive_num(2,2));

//second method Arrow function
const num = (x,y) => ((x<0 && y>0)|| (x>0 && y<0)) 
console.log(num(3,-8));

//====third method 
function p_num(x,y) {
    return (x<0 && y>0) ? x>0 : y<0
}
console.log(p_num(2,-2));