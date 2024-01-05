const myDate = new Date()
//console.log(myDate);

let newDate = new Date()
//console.log(newDate);

//const currentDate = new Date("yyyy-mm-dd");
//console.log(currentDate.getDate());

//function getCurrentDate() {
    // Get current date
    const currentDate = new Date();

    // Get day, month, and year
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const year = currentDate.getFullYear();

    // Format with leading zeros
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    console.log(`Expected Output:
    ${formattedMonth}-${formattedDay}-${year}`,
    `${formattedMonth}/${formattedDay}/${year}`,
    `${formattedDay}-${formattedMonth}-${year}`,
    `${formattedDay}/${formattedMonth}/${year}`,
    );


   /* // Output in different date formats
    const formats = [
      `${formattedMonth}-${formattedDay}-${year}`,   // mm-dd-yyyy
      `${formattedMonth}/${formattedDay}/${year}`,   // mm/dd/yyyy
      `${formattedDay}-${formattedMonth}-${year}`,   // dd-mm-yyyy
      `${formattedDay}/${formattedMonth}/${year}`    // dd/mm/yyyy
    ];

    // Display the result
    console.log("Expected Output:");
  //  formats.forEach(format => console.log(format));
  //}

  // Call the function to get and display the current date
  ///getCurrentDate();*/
