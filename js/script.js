var $buttonsDigitCollection = document.querySelectorAll('.js-button-digit');

$buttonsDigitCollection.forEach(function($element) {
  $element.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event)
  })
})