const $buttonsDigitCollection = document.querySelectorAll('.js-button-digit'); // собирает все цифровые кнопки по классу, тип: Объект
const $buttonsOperationCollection = document.querySelectorAll('js-button-operations'); // собирает все операционные кнопки по классу, тип: Объект

function getValue($something) {
    return $something.value;
}; // Возвращает значение value у аргумента

const $inputDisplay = document.querySelector('.js-display'); // Создает константу в виде элемента с классом в скобках (целый кусок html) (Инпут дисплей)

$buttonsDigitCollection.forEach(function($element) { // проходит циклом по цифровым кнопкам ($buttonsDigitCollection)
    $element.addEventListener('click', function(event) { // навешивает событие 'click' на каждый элемент, по которому прошлись циклом, добавляет функцию в ответ на совершенное событие 'click'. Т.е. функция сработает, если по кнопке кликнут.
        event.preventDefault(); // сброс действий по умолчанию
        $inputDisplay.value += getValue($element); // Увеличивает в цикле value у $inputDisplay на value от $element (той кнопки, по которой кликнули)
    });
});
