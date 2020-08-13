const number1 = document.getElementById('number1')! as HTMLInputElement;
const number2 = document.getElementById('number2')! as HTMLInputElement;
const sumEl = document.getElementById('total')! as HTMLInputElement;
const button = document.getElementById('button');

function add(number1: number, number2: number): number {
  return number1 + number2;
}

button.addEventListener('click', () => {
  const total = add(parseInt(number1.value), parseInt(number2.value));
  sumEl.value = total.toFixed(1);
  console.log(total);
});
