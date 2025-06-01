const button_numbers = document.querySelectorAll('.btn-num');
const resultSection = document.getElementById('result');
let currentInput = '';

button_numbers.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerHTML;
        currentInput += value;
        resultSection.innerHTML = currentInput;
    });
});

document.getElementById("c").addEventListener("click", () => {
    currentInput = '0';
    resultSection.innerHTML = currentInput;
});

document.getElementById("percent").addEventListener("click", () => {

    try {
        // Evaluate the current input and divide by 100
        const value = eval(currentInput);
        currentInput = (value / 100).toString();
    } catch (error) {
        currentInput = 'Expression Error';
    }
    resultSection.innerHTML = currentInput;
});

document.getElementById("divide").addEventListener("click", () => {
    addOperator('/');
    resultSection.innerHTML = currentInput;
});

document.getElementById("multiply").addEventListener("click", () => {
    addOperator('*');
    resultSection.innerHTML = currentInput;
});
document.getElementById("minus").addEventListener("click", () => {
    addOperator('-');
    resultSection.innerHTML = currentInput;
});

document.getElementById("plus").addEventListener("click", () => {
    addOperator('+');
    resultSection.innerHTML = currentInput;
});

document.getElementById("delete").addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);
    resultSection.innerHTML = currentInput;
});

document.getElementById("equals").addEventListener("click", () => {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Expression Error';
    }
    resultSection.innerHTML = currentInput;
});

function addOperator(op) {
    if (currentInput.length === 0) return; // Prevent starting with operator

    const lastChar = currentInput.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + op;
    } else {
        currentInput += op;
    }

    // Update the result section with the current input
    resultSection.innerHTML = currentInput;
}

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        currentInput += key;
        resultSection.innerHTML = currentInput;
    } else if (key === 'Enter') {
        try {
            if (currentInput.length === 0) return; // Prevent evaluating empty input
            currentInput = eval(currentInput).toString();
        } catch (error) {
            currentInput = 'Expression Error';
        }
        resultSection.innerHTML = currentInput;
    } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        resultSection.innerHTML = currentInput;
    } else if (['+', '-', '*', '/', '%'].includes(key)) {
        addOperator(key);
    }
});