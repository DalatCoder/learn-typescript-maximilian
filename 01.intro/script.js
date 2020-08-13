var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var sumEl = document.getElementById('total');
var button = document.getElementById('button');
function add(number1, number2) {
    return number1 + number2;
}
button.addEventListener('click', function () {
    var total = add(parseInt(number1.value), parseInt(number2.value));
    sumEl.value = total.toFixed(1);
    console.log(total);
});
