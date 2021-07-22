import {AD_FORM, AD_FORM_DISABLE, FILTERS_FORM, FILTERS_FORM_DISABLE} from './const.js';
import {generateElement} from './generate-element.js';

const disableForm = (form, selector) => {
  const formElements = AD_FORM.children;
  form.classList.add(selector);
  for (let index = 0; index < formElements.length; index++) {
    formElements[index].disabled = true;
  }
};

const enableForm = (form, selector) => {
  const formElements = form.children;
  form.classList.remove(selector);
  for (let index = 0; index < formElements.length; index++) {
    formElements[index].removeAttribute('disabled');
  }
};
const disablePage = () => {
  disableForm(AD_FORM, AD_FORM_DISABLE);
  disableForm(FILTERS_FORM, FILTERS_FORM_DISABLE);
};

const enableAdForm = () => {
  enableForm(AD_FORM, AD_FORM_DISABLE);
};

const enablefiltersForm = () => {
  enableForm(FILTERS_FORM, FILTERS_FORM_DISABLE);
};

const openMessage = (templateSelector) => {
  const template = generateElement(templateSelector);
  document.body.append(template);
  const btn = template.querySelector('.error__button');

  const onCloseMessage = () => {
    template.remove();
  };

  const onKeyDown = (event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      onCloseMessage();
      document.removeEventListener('keydown', onKeyDown);
    }
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

export {enableForm, disablePage, enableAdForm, enablefiltersForm, openMessage, debounce};
