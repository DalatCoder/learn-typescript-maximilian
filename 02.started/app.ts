function add(n1: number, n2: number): number {
  return n1 + n2;
}

const number1: number = 5;
const number2: number = 10;
const printResult: boolean = true;

const result: number = add(number1, number2);

if (printResult) {
  console.log(result);
}

const person: { name: string; age: number } = {
  name: 'Hieu',
  age: 20,
};

console.log(person);
