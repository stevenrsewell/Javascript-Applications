## Weather App
This code is a weather app written in HTML, CSS, and JavaScript. It allows users to input a ZIP code, it will retrieve weather data from the OpenWeatherMap API, and then display the current temperature and weather description for that location. Additionally, it provides buttons to switch between displaying the temperature in Celsius and Fahrenheit.

Javascript Functions:
+ The getWeather() function retrieves weather data using fetch() from the OpenWeatherMap API based on the entered ZIP code and selected temperature unit.
+ Upon successful retrieval, the displayWeather(data) function updates the HTML to show the city name, temperature, and weather description.
+ The temperature unit (Celsius or Fahrenheit) is toggled using the switchToCelsius() and switchToFahrenheit() functions. These functions update the isCelsius variable and fetch weather data again with the new unit selected.

## Calculator
This code creates a calculator app using HTML, CSS, and JavaScript. It allows users to input their own numbers on their keboard, or use the buttons on the calculator to perform addition, subtraction, multiplication, and division. 

Javascript Functions:
+ appendToDisplay(value): Appends the provided value to the display area.
+ clearDisplay(): Clears the content of the display area.
+ calculate(): Evaluates the expression in the display using JavaScript's eval() function and shows the result on the display.
+ document.addEventListener(): Listens for keydown events on the document. It checks the keyCode or key of the pressed key, appends numbers, decimal points, and basic operators to the display, triggers calculation on "Enter" (keyCode === 13), and clears the display on "Backspace" (keyCode === 8).

## Digital Clock
This code creates a digital clock web application using HTML, CSS, and JavaScript. A dropdown menu allows users to select different timezones, and time displayed is in a 12-hour format with AM/PM.

Javascript Functions:
+ The showTime() function: Retrieves the selected timezone value from the dropdown and uses toLocaleString to obtain the current time in the selected timezone. It then parses the obtained time and extracts hours, minutes, and seconds, determines whether it's AM or PM based on the hours, formats the time into a 12-hour format, and updates the content of the div with the ID "clock" to display the formatted time.

## To Do List
This code creates a to-do list web application using HTML, CSS, and JavaScript. Users can input a new to-do item and assign it to a category. Clicking the "Add" button adds the to-do item to the list with the specified category. Clicking on a to-do item's text toggles its completion status, and clicking the close button removes the entire to-do item from the list.

Javascript Functions:
+ form.addEventListener: Listens for the form submission event, checks if both the to-do and category input fields are not empty, creates HTML elements (li, div, span, button) to represent a to-do item and its category, appends these elements to the todo-list unordered list, and clears the input fields after adding the to-do item.
+ list.addEventListener(): Listens for click events on the to-do list. It checks if the clicked target is a span element to mark a to-do as completed, and if the clicked target is a close button (close class), it removes the corresponding to-do item from the list.

## Tic Tac Toe Game
This code creates a playable Tic Tac Toe game using HTML, CSS, and Javascript. Players take turns by clicking on empty cells to place their marks (X or O) on the board. After each move, the game checks for a winning combination, and upon completion the "Restart Game" button clears the board and allows for the users to start a new game.

Javascript Functions:
+ handleCellClick function handles a player's move when a cell is clicked. It checks if the cell is already played or if the game is over, and it calls handleCellPlayed and handleResultValidation functions accordingly.
+ handleCellPlayed updates the game state and the clicked cell with the current player's mark (X or O).
+ handleResultValidation checks for win or draw conditions after each move, updates gameActive status, and displays the result in gameStatus based on the game outcome.
+ changePlayer(): switches the current player between 'X' and 'O' after each move.
+ handleRestartGame(): resets the game state and board when the "Restart Game" button is clicked.
