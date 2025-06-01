const button_numbers = document.querySelectorAll('.btn-num');
const resultSection = document.getElementById('result');
let currentInput = '';

button_numbers.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
    
        currentInput += value;
        resultSection.textContent = currentInput;
    });
});

document.getElementById("c").addEventListener("click", () => {
    currentInput = '';
    resultSection.textContent = currentInput;
});

document.getElementById("divide").addEventListener("click", () => {
    currentInput += '/';
    resultSection.textContent = currentInput;
});

document.getElementById("multiply").addEventListener("click", () => {
    currentInput += '*';
    resultSection.textContent = currentInput;
});
document.getElementById("minus").addEventListener("click", () => {
    currentInput += '-';
    resultSection.textContent = currentInput;
});

document.getElementById("plus").addEventListener("click", () => {
    currentInput += '+';
    resultSection.textContent = currentInput;
});

document.getElementById("delete").addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);
    resultSection.textContent = currentInput;
});

document.getElementById("equals").addEventListener("click", () => {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    resultSection.textContent = currentInput;
});
