
const upper_lower =(str) =>{
    return (str.length<3) ? str.toUpperCase():
  //  ((str.substring(0,3)).toLowerCase()+str.substring(3,str.length))
    //((str.substring(-3,0)).toLowerCase()+str.substring(3,str.length))
    ((str.substring(-3,3)).toLowerCase()+str.substring(3,str.length))
}
console.log(upper_lower(("PYTHON")));
console.log(upper_lower(("JAVAScript")));