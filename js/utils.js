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

const shuffle = (data) => {
  const shuffleData = data.slice();
  for (let index = shuffleData.length - 1; index > 0; index--) {
    const newIndex = Math.floor(Math.random() * (index + 1));
    [shuffleData[index], shuffleData[newIndex]] = [shuffleData[newIndex], shuffleData[index]];
  }
  return shuffleData;
};

const disablePage = () => {
  const adForm = document.querySelector('.ad-form');
  const adFormElements = adForm.children;
  const filtersForm = document.querySelector('.map__filters');
  const filtersFormElements = filtersForm.children;

  adForm.classList.add('ad-form--disabled');
  for (let index = 0; index < adFormElements.length; index++) {
    adFormElements[index].setAttribute('disable', 'true');
  }

  filtersForm.classList.add('map__filters--disabled');
  for (let index = 0; index < filtersFormElements.length; index++) {
    filtersFormElements[index].setAttribute('disable', 'true');
  }
};

const enablePage = () => {
  const adForm = document.querySelector('.ad-form');
  const adFormElements = adForm.children;
  const filtersForm = document.querySelector('.map__filters');
  const filtersFormElements = filtersForm.children;

  adForm.classList.remove('ad-form--disabled');
  for (let index = 0; index < adFormElements.length; index++) {
    adFormElements[index].removeAttribute('disable');
  }

  filtersForm.classList.remove('map__filters--disabled');
  for (let index = 0; index < filtersFormElements.length; index++) {
    filtersFormElements[index].removeAttribute('disable');
  }
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, shuffle, disablePage, enablePage};
