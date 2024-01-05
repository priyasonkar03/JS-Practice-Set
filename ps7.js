// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  

for (let year = 2014; year<=2050; year++){
    const d = new Date(year , 0 , 1)  // January 1st of the current year
    if (d.getDay() === 0) {
        //console.log("1st January is being a Sunday ", year);
    }
}

function findsun(yearStart, yearEnd) {
    for (let year = yearStart; year <= yearEnd; year++){
        const date = new Date(year, 0 , 1)  // January 1st of the current year
        if (date.getDay() === 0){
        console.log(`January 1st, ${year} is being a sunday`);
        }
    }
}
//declear year
//const startYear = 2014
//const endYear = 2025
//findsun(startYear,endYear)

findsun(2014,2025)
//=====wrong output


function findSunday(yearStart, yearEnd) {
    for (let year = yearStart; year <= yearEnd; year++) {
        const date = new Date(year, 0, 1); // January 1st of the current year
        if (date.getDay() === 0) {
            //console.log(`January 1st, ${year} is a Sunday.`);
        }
    }
}

// Specify the range of years
const startYear = 2014;
const endYear = 2050;

// Call the function
findSunday(startYear, endYear);
