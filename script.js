function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
    display.focus(); // Keep focus on the display
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500); // Clear display after 1.5 seconds
    }
}
