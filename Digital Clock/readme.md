# Digital Clock

JavaScript application that shows a digital clock

In this code, I first created an HTML file with a div element that will display the clock. I also included a stylesheet to center the text and make it larger. I then created a JavaScript file that defines a function showTime(). This function creates a new Date object, which represents the current date and time. It then extracts the hours, minutes, and seconds from the date and formats them into a string.

The setInterval() method is used to call the showTime() function every second, which updates the text displayed in the div element with the current time.

A feature was also added to allow users to select a time zone and display the time in that time zone. I added a select element that allows the user to select a time zone. The showTime() function will now get the selected time zone value and passes it to the toLocaleString() method to create a new Date object with the selected time zone. To display the time in a 12-hour format, the showTime() function was modified to convert the hours to a 12-hour format and add an AM/PM indicator.

Finally, the application was styled with Bootstrap