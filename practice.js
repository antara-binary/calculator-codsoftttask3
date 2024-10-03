const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (value === 'all-clear') {
      currentInput = '';
      previousInput = '';
      operator = '';
      screen.value = '';
    } else if (value === '=') {
      if (previousInput !== '' && operator !== '') {
        currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
        screen.value = currentInput;
        operator = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput !== '') {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      currentInput += value;
      screen.value = currentInput;
    }
  });
});
