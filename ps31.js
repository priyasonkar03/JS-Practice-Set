/*Write a JavaScript program to find the largest of three given integers.*/
//========first method
const g_values = (x,y,z) =>{
    const max_val = (x>y)? `${x}`:`${y}` 
    return (z>max_val) ? `${z}`: `${max_val}`
}

console.log(g_values(1000,515,461));
console.log(g_values(515,4601,2));
console.log(g_values(515,4601,25000));

//==========Second method
function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(max_of_three(1,0,1));
console.log(max_of_three(0,-10,-20));
console.log(max_of_three(1000,510,440));