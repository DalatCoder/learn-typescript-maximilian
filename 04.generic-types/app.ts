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

class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('ABC');
// textStorage.addItem(10);
textStorage.addItem('abc');
textStorage.removeItem('abc');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// Error when remove an object

interface CourseGoal {
  title: string;
  description: string;
  date: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.date = date;
  courseGoal.title = title;
  courseGoal.description = description;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Hieu', 'Ha'];
