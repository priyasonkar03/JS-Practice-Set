//Write a JavaScript exercise to create a variable using a user-defined name.
let var_name = 'priya'
let n = 100;
this[n] = var_name;
console.log(this[n]);

//==second output
this[var_name] = n;
console.log(this[var_name]);