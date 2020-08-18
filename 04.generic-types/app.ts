interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';

  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }

  return [element, descriptionText];
}

console.log(countAndDescribe('hello world'));
console.log(countAndDescribe([1, 2, 3]));

function extractAndConvert<T extends Object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'value: ' + obj[key];
}

// extractAndConvert({}, 'name');
extractAndConvert({ name: 'Hieu' }, 'name');
