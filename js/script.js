const $buttonsDigitCollection = document.querySelectorAll('.js-button-digit');
function getValue($something) {
    return $something.value;
};

var number1=null;
const $inputDisplay = document.querySelector('.js-display');

$buttonsDigitCollection.forEach(function($element) {
    $element.addEventListener('click', function(event) {
        event.preventDefault();
        $inputDisplay.value += getValue($element);
        number1 = $inputDisplay.value;
    });
});
