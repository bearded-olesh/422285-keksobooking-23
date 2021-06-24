import {getRandomPositiveInteger} from './get-random-positive-integer';

const shuffleFeatures = (array) => {
  const featuresData = array.slice(getRandomPositiveInteger(1, array.length - 1));
  for (let index = featuresData.length - 1; index > 0; index--) {
    const newIndex = Math.floor(Math.random() * (index + 1));
    [featuresData[index], featuresData[newIndex]] = [featuresData[newIndex], featuresData[index]];
  }
  return featuresData;
};

export {shuffleFeatures};
