const isAdult = function (age) {
  if (typeof age === 'number' && !isNaN(age) && age > 0) {
    age >= 18 ? (verdict = true) : (verdict = false);
    return verdict;
  }
  return null;
};

const checkMultiplicity = function (num, mul) {
  if (
    typeof num === 'number' && !isNaN(num) && 
    typeof mul === 'number' && !isNaN(mul) && mul !== 0
  ) {
    num % mul ? (verdict = false) : (verdict = true);
    return verdict;
  }
  return null;
};

const isTrianglePossible = function (a, b, c) {
  if (
    typeof a === 'number' && !isNaN(a) && a > 0 && 
    typeof b === 'number' && !isNaN(b) && b > 0 && 
    typeof c === 'number' && !isNaN(c) && c > 0
  ) {
    a + b > c && a + c > b && b + c > a ? (verdict = true) : (verdict = false);
    return verdict;
  }
  return null;
};

const sumOfOdd = function (num) {
  if (typeof num === 'number' && !isNaN(num) && num > 0) {
    let currentOdd = 1;
    let result = 1;

    for (let i = 2; i < num; i += 2) {
      currentOdd += 2;
      result += currentOdd;
    }
    return result;
  }
  return null;
};

const isSimple = function (num) {
  if (typeof num === 'number' && !isNaN(num) && num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i) {
        verdict = true;
      } else {
        verdict = false;
        return verdict;
      };
    };
    return verdict;
  }
  return null;
};
