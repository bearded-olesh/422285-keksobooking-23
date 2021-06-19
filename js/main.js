const getRandomNumber = (min, max) => {
  if (min > 0 && max > 0) {
    const result = min + Math.random() * (max + 1 - min);
    return Math.floor(result);
  }

  return 'Недопустимый диапазон';
};
getRandomNumber(1, 10);

const getRandomNumberWithComma = (min, max, quantity) => {
  if (min > 0 && max > 0) {
    const result = min + Math.random() * (max + 1 - min);
    return result.toFixed(quantity);
  }

  return 'Недопустимый диапазон';
};
getRandomNumberWithComma(1.1, 1.2, 3);
