document.addEventListener('DOMContentLoaded', function () {
    // Add a keydown event listener
    document.addEventListener('keydown', function (event) {
        const key = event.key;
        const operators = ['+', '-', '*', '/', '%'];
        
        if (/\d/.test(key)) {
            // If a number is pressed
            appendNumber(key);
        } else if (operators.includes(key)) {
            // If an operator is pressed
            appendOperator(key);
        } else if (key === 'Enter' || key === '=') {
            // If Enter or = is pressed
            event.preventDefault(); // Prevent default behavior like form submission
            calculateResult();
        } else if (key === 'Backspace') {
            // If Backspace is pressed
            deleteLast();
        } else if (key === 'Escape') {
            // If Escape is pressed
            clearDisplay();
        } else if (key === '.') {
            // If . is pressed
            appendNumber(key);
        }
    });
});

function appendNumber(number) {
    const result = document.getElementById('result');
    result.value += number;
}

function appendOperator(operator) {
    const result = document.getElementById('result');
    const lastChar = result.value.slice(-1);

    if (!['+', '-', '*', '/', '%'].includes(lastChar)) {
        result.value += operator;
    }
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
