const calculation = (min, max) => min + Math.random() * (max + 1 - min);

const getRandomNumber = (min, max) => {
  if (min > 0 && max > 0 && min < max) {
    const result = calculation(min, max);
    return Math.round(result);
  }

  return false;
};
getRandomNumber(1, 10);

const getRandomFloat = (min, max, quantity) => {
  if (min > 0 && max > 0 && min < max) {
    const result = calculation(min, max);
    return Number(result.toFixed(quantity));
  }

  return false;
};
getRandomFloat(1.1, 1.2, 3);
