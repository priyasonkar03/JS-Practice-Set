/* Write a JavaScript program to remove a character at 
the specified position in a given string and return the modified string.*/
//===========First method
// const remove_char = (str,char_pos)=>( //by arrow function method
//     str.substring(0,char_pos)+ str.substring(char_pos+1, str.length)
// )
//console.log(remove_char("Python",2));

//========Second method
//const remove_char = (str,char_pos) =>{        //by arrow function method
function remove_char (str,char_pos){            //by function method
    const part1 = str.substring(0,char_pos)
    const part2 = str.substring(char_pos+1, str.length)
    return (part1+part2)
}

console.log(remove_char("JavaSricpt",0));
