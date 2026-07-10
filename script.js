const generateButton = document.getElementById('generate-button');
const fiveNumbersContainer = document.getElementById('five-numbers');
const singleNumberContainer = document.getElementById('single-number');

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUniqueNumbers(count, min, max) {
  const numbers = new Set();
  while (numbers.size < count) {
    numbers.add(randomInt(min, max));
  }
  return Array.from(numbers);
}

function renderNumbers() {
  const fiveNumbers = generateUniqueNumbers(5, 1, 70);
  const singleNumber = randomInt(1, 20);

  fiveNumbersContainer.innerHTML = '';
  fiveNumbers.forEach((value) => {
    const span = document.createElement('span');
    span.textContent = value;
    fiveNumbersContainer.appendChild(span);
  });

  singleNumberContainer.innerHTML = '';
  const singleSpan = document.createElement('span');
  singleSpan.textContent = singleNumber;
  singleNumberContainer.appendChild(singleSpan);
}

generateButton.addEventListener('click', renderNumbers);

window.addEventListener('DOMContentLoaded', renderNumbers);
