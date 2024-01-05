//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
//Expected Output :
//60°C is 140 °F
//45°F is 7.222222222222222°C

// function CtoF(ctemp) {
//         //const ctemp = Celsius;
//         const cTofran = ctemp * 9 / 5 + 32;
//         console.log(ctemp + '\xB0C is ' + cTofran + '\xB0F');
// }
// CtoF(50);
// function FtoC(ftemp) {
//     //const ctemp = Celsius;
//     const fToCal = (ftemp-32)/9*5;
//(fTemp - 32) * 5 / 9;
//     console.log(ftemp + '\xB0F is ' + fToCal + '\xB0C');
// }
// FtoC(45);
//=============second method function declaration 
(function CtoF(ctemp) {
    const cTofran = ctemp * 9 / 5 + 32;
    console.log(ctemp + '\xB0C is ' + cTofran + '\xB0F');
})(54);    


function FtoC(ftemp) {
    //     //const ctemp = Celsius;
            const fToCal = (ftemp - 32)* 5/ 9;
     console.log(ftemp + '\xB0F is ' + fToCal + '\xB0C');
    } FtoC(50);

