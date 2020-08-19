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

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: 'Hieu',
  age: 20,
  hobbies: ['Sport', 'Cooking'],
  role: Role.ADMIN,
};

let colors: string[];
colors.push('Red', 'Green', 'Blue');

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
