 function getCurrentDayAndTime() {
    // Get current date and time
    const currentDate = new Date();

    // Get day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    // Get current time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const  prepand = (hours >= 12) ? " PM " : " AM ";
    // Format time with leading zeros
    const formattedTime = `${hours < 10 ? '0' + hours : hours}${prepand}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    // Display the result
    const result = `Today is: ${dayOfWeek}
    Current Time: ${formattedTime}`;
    console.log(result);

    // If you want to display it on a webpage, you can use the following line:
     //document.body.innerHTML = result;
  }

  // Call the function to display current day and time
  getCurrentDayAndTime();

