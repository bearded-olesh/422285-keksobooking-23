const getRandomPositiveInteger = (limA, limB) => {
  const lower = Math.ceil(Math.min(Math.abs(limA), Math.abs(limB))),
    upper = Math.floor(Math.max(Math.abs(limA), Math.abs(limB))),
    result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (limA, limB, digits = 1) => {
  const lower = Math.min(Math.abs(limA), Math.abs(limB)),
    upper = Math.max(Math.abs(limA), Math.abs(limB)),
    result = Math.random() * (upper - lower) + lower;
  return parseFloat(result.toFixed(digits));
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0,elements.length - 1)];

const shuffleFeatures = (data) => {
  const featuresData = data.slice(getRandomPositiveInteger(1, data.length - 1));
  for (let index = featuresData.length - 1; index > 0; index--) {
    const newIndex = Math.floor(Math.random() * (index + 1));
    [featuresData[index], featuresData[newIndex]] = [featuresData[newIndex], featuresData[index]];
  }
  return featuresData;
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, shuffleFeatures};
