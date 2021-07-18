import {AD_FORM, FILTERS_FORM} from './const.js';
import {generateElement} from './generate-element.js';

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
  const adFormElements = AD_FORM.children;
  const filtersFormElements = FILTERS_FORM.children;
  AD_FORM.classList.add('ad-form--disabled');
  for (let index = 0; index < adFormElements.length; index++) {
    adFormElements[index].disabled = true;
  }

  FILTERS_FORM.classList.add('map__filters--disabled');
  for (let index = 0; index < filtersFormElements.length; index++) {
    filtersFormElements[index].disabled = true;
  }
};

const enablePage = () => {
  const adFormElements = AD_FORM.children;
  const filtersFormElements = FILTERS_FORM.children;

  AD_FORM.classList.remove('ad-form--disabled');
  for (let index = 0; index < adFormElements.length; index++) {
    adFormElements[index].removeAttribute('disabled');
  }

  FILTERS_FORM.classList.remove('map__filters--disabled');
  for (let index = 0; index < filtersFormElements.length; index++) {
    filtersFormElements[index].removeAttribute('disabled');
  }
};

const openMessage = (templateSelector) => {
  const template = generateElement(templateSelector);
  const promise = new Promise(((resolve) => {
    document.body.append(template);
    resolve();
  }));
  promise.then(() => {
    const btn = template.querySelector('.error__button');
    try {
      btn.addEventListener('click', () => {
        template.remove();
      });
    } catch (error) {
      setTimeout(() => {
        template.remove();
      }, 3000);
    }
  });
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, shuffle, disablePage, enablePage, openMessage};
