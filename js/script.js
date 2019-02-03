var $buttonsDigitCollection = document.querySelectorAll('.js-button-digit');
var $inputDisplay = document.querySelector('.js-display');

function getValue($something) {
    return $something.value;
};

$buttonsDigitCollection.forEach(function($element) {
    $element.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(getValue($element));
        $inputDisplay.value = getValue($element);
    });
});






