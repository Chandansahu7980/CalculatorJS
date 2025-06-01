const buttons = document.querySelectorAll('.btn');
const resultSection = document.getElementById('result');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch (error) {
                currentInput = 'Error';
            }
        } else {
            currentInput += value;
        }

        resultSection.textContent = currentInput;
    });
});
