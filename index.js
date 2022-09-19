function factorialAlt(number) {
  let result = 1;
  const recursion = (number) => {
    if (number > 1) {
      result *= number;
      recursion(number - 1);
    }
  };
  recursion(number);
  return result;
}

const factorial = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  } else if (number > 1) {
    return number * factorial(number - 1);
  } else {
    return null;
  }
};
