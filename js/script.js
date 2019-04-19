function getInputValue(id) {
  return document.getElementById(id).value;
}

function stringToNumber(string) {
  return +string;
}

const $outputDisplay = document.querySelector('.js-output');
const $buttonsOperationsCollection = document.querySelectorAll('.js-button-operations');

function output(result) {
  $outputDisplay.value = result;
}

function calculate(event) {
  const button = event.target;
  const buttonValue = button.dataset.operation;
  const inputValueOne = getInputValue('first-num');
  const inputValueTwo = getInputValue('second-num');
  const numberOne = stringToNumber(inputValueOne);
  const numberTwo = stringToNumber(inputValueTwo);

  let result = null;

  switch (buttonValue) {
    case 'addition':
      result = numberOne + numberTwo;
      break;
    case 'subtraction':
      result = numberOne - numberTwo;
      break;
    case 'multiply':
      result = numberOne * numberTwo;
      break;
    case 'division':
      result = numberOne / numberTwo;
      break;
    case 'reset':
      document.getElementById('first-num').value = '';
      document.getElementById('second-num').value = '';
      result = '';
  }

  output(result);
}

$buttonsOperationsCollection.forEach(function (button) {
  button.addEventListener('click',calculate);
});
/*$buttonsDigitCollection.forEach(function($element) { // проходит циклом по цифровым кнопкам ($buttonsDigitCollection)
    $element.addEventListener('click', function(event) { // навешивает событие 'click' на каждый элемент, по которому прошлись циклом, добавляет функцию в ответ на совершенное событие 'click'. Т.е. функция сработает, если по кнопке кликнут.
        event.preventDefault(); // сброс действий по умолчанию
        $inputDisplayOne.value += getValue($element); // Увеличивает в цикле value у $inputDisplay на value от $element (той кнопки, по которой кликнули)
    });
});*/
