const numberIsPair = (number) => number % 2 === 0;

const numberIsPrime = (number) => {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let x = 2; x < number; x++) {
      if (number % x === 0) {
        return false;
      }
    }
    return true;
  }
};

const checkCommaOrDot = (arr, number) => {
  if (arr.indexOf(number) === arr.length - 1) {
    return ".";
  } else {
    return ",";
  }
};

const numberIsMultiple = (number, input) => number % input === 0;

export { numberIsPair, numberIsPrime, numberIsMultiple, checkCommaOrDot };
