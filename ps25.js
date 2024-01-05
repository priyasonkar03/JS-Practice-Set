/* Write a JavaScript program 
to check whether a given positive number is a multiple of 3 or 7.*/

const check_num = (num) => !(num % 3 === 0 || num % 7 === 0);
console.log(check_num(15));

const check_num1 = (num) => (num % 3 == 0 || num % 7 == 0 ? true : false);
console.log(check_num1(15));
console.log(check_num1(11));
