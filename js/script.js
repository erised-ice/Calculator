const $buttonsDigitCollection = document.querySelectorAll('.js-button-digit');
function getValue($something) {
    return $something.value;
};

const $inputDisplay = document.querySelector('.js-display');

$buttonsDigitCollection.forEach(function($element) {
    $element.addEventListener('click', function(event) {
        event.preventDefault();
        $inputDisplay.value += getValue($element);
    });
});


// следующие строки не относятся к необходимому коду:
var $messege;
$messege = 'Hello!';

// console.log(typeof $buttonsDigitCollection);
// console.log(typeof getValue);
// console.log(typeof $inputDisplay);
// console.log(typeof $messege);
// console.log(typeof $inputDisplay.value);
