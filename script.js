// Get all the buttons with the class "btn" and store them in an array-like object.
let buttons = document.querySelectorAll('.btn');

// Get the input field (screen) where the numbers and results will be displayed.
let screen = document.getElementById('result');

// Loop through each button element.
buttons.forEach(button => {
    // Add a "click" event listener to each button.
    button.addEventListener('click', (e) => {
        // When a button is clicked, this function will be executed.

        // Get the text content (number or operator) of the clicked button.
        let buttonText = e.target.innerText;

        // Check which button was clicked based on its text content
        switch (buttonText) {
            case '=':
                try {
                    // Evaluate the expression on the screen.
                    screen.value = eval(screen.value);
                } catch (error) {
                    // Handle potential errors during evaluation.
                    screen.value = "Error";
                }
                break; // Exit the switch statement

            case 'C':
                // Clear the entire screen.
                screen.value = "";
                break;


            // case 'AC':
            //     // Clear the last entry on the screen.
            //     screen.value = screen.value.slice(-1);
            //     break;

            case 'DEL':
                // Clear the last entry on the screen.
                screen.value = screen.value.slice(0, -1);
                break;

            default:
                // Append the button's text to the screen.
                screen.value += buttonText;
        }
    });
});

