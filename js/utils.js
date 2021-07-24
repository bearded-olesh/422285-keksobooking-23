import {AD_FORM, AD_FORM_DISABLE, FILTERS_FORM, FILTERS_FORM_DISABLE, ESCAPE, ESC, CLOSE_MESSAGE_DELAY, DEBOUNCE_DELAY} from './const.js';
import {generateElement} from './generate-element.js';

const disableForm = (form, selector) => {
  const formElements = [...form.children];
  form.classList.add(selector);
  formElements.forEach((formElement) => {
    formElement.disabled = true;
  });
};

const enableForm = (form, selector) => {
  const formElements = [...form.children];
  form.classList.remove(selector);
  formElements.forEach((formElement) => {
    formElement.disabled = false;
  });
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
    if (event.key === ESCAPE || event.key === ESC) {
      onCloseMessage();
      document.removeEventListener('keydown', onKeyDown);
    }
  };

  document.addEventListener('keydown', onKeyDown);

  if (btn) {
    btn.addEventListener('click', onCloseMessage);
    template.addEventListener('click', onCloseMessage);
  } else {
    setTimeout(onCloseMessage, CLOSE_MESSAGE_DELAY);
    template.addEventListener('click', onCloseMessage);
  }
};

const debounce = (callback, timeoutDelay = DEBOUNCE_DELAY) => {
  let timeoutId;

  return () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.call(null), timeoutDelay);
  };
};

export {enableForm, disablePage, enableAdForm, enablefiltersForm, openMessage, debounce};
