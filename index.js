'use strict';
// task 1
function sumOfNums(number) {
  return number > 0 ? number + sumOfNums(number - 1) : 0;
}

//task 2
const group = {
  university: 'National University "Lorem Ipsum"',
  faculty: 'Engineer',
  chair: 'chair 404',
};
const student = {
  firstName: 'U5er',
  lastName: 'U5erovich',
  age: 420,
  contacts: {
    phone: '0987654321',
    email: 'u5er@email.com',
  },
  dateOfApplication: new Date(2016, 8),
  // variant 1: return error
  get course() {
    return new Date().getFullYear() - student.dateOfApplication.getFullYear() <= 5
      ? new Date().getFullYear() - student.dateOfApplication.getFullYear()
      : new RangeError('Graduated');
  },
  id: 69,
  __proto__: group,
  // variant 2: throw error
  // get course() {
  //   if (new Date().getFullYear() - student.dateOfApplication.getFullYear() <= 5) {
  //     return new Date().getFullYear() - student.dateOfApplication.getFullYear()
  //   } else {
  //     throw new RangeError('Graduated');
  //   }
  // },
};

function studentInfo(student) {
  return {
    fullName: `${student.firstName} ${student.lastName}`,
    age: student.age,
    contacts: student.contacts,
    id: student.id,
    university: student.university,
    faculty: student.faculty,
    chair: student.chair,
    course: student.course,
  };
}

//task 3
let numArray = [],
  evenIndexNumbers = [],
  evenNumbers = [],
  numZeroIndex = [],
  negativeNumbers = 0;

for (let i = 0; i < 25; i++) {
  numArray[i] = Math.floor((Math.random() - 0.25) * 10);
  if (!(i % 2)) {
    evenIndexNumbers[evenIndexNumbers.length] = numArray[i];
  }
  if (!(numArray[i] % 2)) {
    evenNumbers[evenNumbers.length] = numArray[i];
  }
  if (numArray[i] === 0) {
    numZeroIndex[numZeroIndex.length] = i;
  }
  if (numArray[i] < 0) {
    negativeNumbers++;
  }
}

function checkNumberArray() {
  console.log('Whole array:');
  console.log(numArray);
  console.log('Numbers with even index:');
  console.log(evenIndexNumbers);
  console.log('Even numbers:');
  console.log(evenNumbers);
  console.log('Indexes of zeros:');
  console.log(numZeroIndex);
  console.log('Amount of negative numbers:');
  console.log(negativeNumbers);
}

//task 4
class Book {
  #author;
  #name;
  #year;
  #publishing;
  constructor(author, name, year, publishing) {
    this.author = author;
    this.name = name;
    this.year = year;
    this.publishing = publishing;
  }
  get author() {
    return this.#author;
  }
  get name() {
    return this.#name;
  }
  get year() {
    return this.#year;
  }
  get publishing() {
    return this.#publishing;
  }
  set author(string) {
    if (typeof string !== 'string') {
      throw new TypeError('Author must be string');
    }
    if (string.trim() === '') {
      throw new TypeError('Author string cannot be empty');
    }
    this.#author = string;
  }
  set name(string) {
    if (typeof string !== 'string') {
      throw new TypeError('Book name must be string');
    }
    if (string.trim() === '') {
      throw new TypeError('Book name string cannot be empty');
    }
    this.#name = string;
  }
  set year(number) {
    if (typeof number !== 'number') {
      throw new TypeError('Year of publishing must be number');
    }
    if (number > new Date().getFullYear()) {
      throw new RangeError('Book cannot be from the future, can it');
    }
    this.#year = number;
  }
  set publishing(string) {
    if (typeof string !== 'string') {
      throw new TypeError('Publishing must be string');
    }
    if (string.trim() === '') {
      throw new TypeError('Publishing string cannot be empty');
    }
    this.#publishing = string;
  }
}

class EBook extends Book {
  #format;
  #id;
  constructor(book, format, id) {
    super(book.author, book.name, book.year, book.publishing);
    this.format = format;
    this.id = id;
  }
  get format() {
    return this.#format;
  }
  get id() {
    return this.#id;
  }
  set format(string) {
    if (typeof string !== 'string') {
      throw new TypeError('Format must be string');
    }
    if (string.trim() === '') {
      throw new TypeError('Format string cannot be empty');
    }
    if (!EBook.supportedFormats.includes(string)) {
      throw new TypeError('Unsupported format');
    }
    this.#format = string;
  }
  set id(string) {
    if (typeof string !== 'string') {
      throw new TypeError('ID must be string');
    }
    if (string.trim() === '') {
      throw new TypeError('ID string cannot be empty');
    }
    this.#id = string;
  }
  static supportedFormats = ['pdf', 'fb2', 'djvu'];
}

const lorem = new Book('U3', 'Lorem Ipsum', 1970, 'Unelectronic Arts');
const eLorem = new EBook(lorem, 'pdf', 'a69420f');

function createBook(isEBook, valueId, alteredValue) {
  if (!isEBook) {
    let author = 'U2',
      name = 'Iprem Losum',
      year = 1997,
      publishing = 'Artnic Unelectors';
    switch (valueId) {
      case 0: {
        author = alteredValue;
        break;
      }
      case 1: {
        name = alteredValue;
        break;
      }
      case 2: {
        year = alteredValue;
        break;
      }
      case 3: {
        publishing = alteredValue;
        break;
      }
      default: {
        throw "Tapok v User'a";
      }
    }
    return new Book(author, name, year, publishing);
  } else {
    let format = 'fb2',
      id = 'e55e420';
    switch (valueId) {
      case 0: {
        format = alteredValue;
        break;
      }
      case 1: {
        id = alteredValue;
        break;
      }
      default: {
        throw "Another Tapok v User'a";
      }
    }
    return new EBook(lorem, format, id);
  }
}

//task 5
function fizzBuzzNumbers(number) {
  let array = [];
  for (let i = 1; i < number; i++) {
    if (!(i % 3) && !(i % 5)) {
      array[i - 1] = 'fizzbuzz';
    } else if (!(i % 3)) {
      array[i - 1] = 'fizz';
    } else if (!(i % 5)) {
      array[i - 1] = 'buzz';
    } else {
      array[i - 1] = i;
    }
  }
  return array;
}

//task 6
const serverResponse = {
  data: {
    data: [
      {
        id: 0,
        name: 'John',
        lastName: 'Doe',
      },
      {
        id: 1,
        name: 'Jane',
        lastName: 'Doe',
      },
      {
        id: 2,
        name: 'Admin',
        lastName: 'Tiranovich',
      },
      {
        id: 3,
        name: 'User',
        lastName: 'Undefinovich',
      },
    ],
  },
};

const { data: { data: users } } = serverResponse;
const [, , user3, user4] = users;
