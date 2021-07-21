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

const enableAdForm = () => {
  const adFormElements = AD_FORM.children;
  AD_FORM.classList.remove('ad-form--disabled');
  for (let index = 0; index < adFormElements.length; index++) {
    adFormElements[index].removeAttribute('disabled');
  }
};

const enablefiltersForm = () => {
  const filtersFormElements = FILTERS_FORM.children;
  FILTERS_FORM.classList.remove('map__filters--disabled');
  for (let index = 0; index < filtersFormElements.length; index++) {
    filtersFormElements[index].removeAttribute('disabled');
  }
};

const openMessage = (templateSelector) => {
  const template = generateElement(templateSelector);
  document.body.append(template);
  const btn = template.querySelector('.error__button');
  const onKeyDown = ({target}) => {
    if (target.code === 'Escape') {
      onCloseMessage;
    }
  };
  const onCloseMessage = () => {
    template.remove();
    document.removeEventListener('keydown', onKeyDown);
  };
  document.addEventListener('keydown', onKeyDown);
  if (btn) {
    btn.addEventListener('click', onCloseMessage);
  } else {
    setTimeout(onCloseMessage, 3000);
  }
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.call(null), timeoutDelay);
  };
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, shuffle, disablePage, enableAdForm, enablefiltersForm, openMessage, debounce};
