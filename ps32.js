/*Write a JavaScript program 
to find the closest value to 100 from two numerical values.*/
//========First method
const numbers = (x,y)=>{
  const x1 = Math.abs(x-100);
  const y1 = Math.abs(y-100);
  //  return (x1<y1) ? x : (y1<x1) ? y : false
  return(x1<y1 || y1 < x1) ? x : y
}
//console.log(numbers(90,89));

//========Second method
/*function near_100(x, y) {
    if (x != y)
    {
    x1 = Math.abs(x - 100);
    y1 = Math.abs(y - 100);
  
    if (x1 < y1)
    {
      return x;
    }
    if (y1 < x1)
    {
      return y;
    }
    return 0;
    }
    else
      return false;
  }*/
  //short form of functions
//   function near_100(x,y) {
//     if (x!=y){
//         x1 = Math.abs(x - 100);
//         y1 = Math.abs(y - 100);
//         return (x1<y1 || y1 < x1) ? x : y
//     }else{
//     return false
//     }
//   }
  //======or short
  function near_100(x,y){
    x1 = Math.abs(x - 100);
    y1 = Math.abs(y - 100);
    return (x!=y) ? ((x1<y1 || y1 < x1) ? x : y) : false
  }
  
  console.log(near_100(90, 89));
  console.log(near_100(-90, -89));
  console.log(near_100(90, 90));
