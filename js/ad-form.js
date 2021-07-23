import {DISPLAY, AD_FORM, SUCCESS_TEMPLATE, ERROR_TEMPLATE, MIN_PRICE, URL_POST} from './const.js';
import {openMessage} from './utils.js';
import {fetchData} from './api.js';
import {showData} from './map.js';

const title = document.querySelector('#title');
const price = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const type = document.querySelector('#type');
const capacities = capacity.options;
const checkIn = document.querySelector('#timein');
const checkOut = document.querySelector('#timeout');
const features = document.querySelectorAll('.features__checkbox');
const roomsSelector = {
  1: {
    statuses: [false, false, true, false],
    defaultIndex: 2,
  },
  2: {
    statuses: [false, true, true, false],
    defaultIndex: 1,
  },
  3: {
    statuses: [true, true, true, false],
    defaultIndex: 0,
  },
  100: {
    statuses: [false, false, false, true],
    defaultIndex: 3,
  },
};
const resetBtn = document.querySelector('.ad-form__reset');

const onChangeRoomsNumber = () => {
  const value = roomNumber.value;
  roomsSelector[value].statuses.forEach((status, index) => {
    if (status) {
      capacities[index].style.display = DISPLAY.BLOCK;
      capacity.selectedIndex = roomsSelector[value].defaultIndex;
    } else {
      capacities[index].style.display = DISPLAY.NONE;
    }
  });
};

const onChangeMinPrice = () => {
  const value = MIN_PRICE[type.value];
  price.setAttribute('min', value);
  price.setAttribute('placeholder', value);
};

const formValidity = () => {
  title.addEventListener('input', () => {
    if (title.validity.tooShort) {
      title.setCustomValidity('Заголовок объявления должен состоять минимум из 30 символов');
      if (!title.classList.contains('wrong-data')) {title.classList.add('wrong-data');}
    } else if (title.validity.tooLong) {
      title.setCustomValidity('Заголовок объявления не должен превышать 100 символов');
      if (!title.classList.contains('wrong-data')) {title.classList.add('wrong-data');}
    } else  {
      title.setCustomValidity('');
      title.classList.remove('wrong-data');
    }

    title.reportValidity();
  });

  price.addEventListener('input', () => {
    if (price.validity.rangeOverflow) {
      price.setCustomValidity('Цена не должна превышать 1000000');
      if (!price.classList.contains('wrong-data')) {price.classList.add('wrong-data');}
    } else if (price.validity.rangeUnderflow) {
      if (!price.classList.contains('wrong-data')) {price.classList.add('wrong-data');}
    } else  {
      price.setCustomValidity('');
      price.classList.remove('wrong-data');
    }

    price.reportValidity();
  });

  roomNumber.addEventListener('change', onChangeRoomsNumber);

  type.addEventListener('change', onChangeMinPrice);

  checkIn.addEventListener('change', () => {
    checkOut.value = checkIn.value;
  });

  checkOut.addEventListener('change', () => {
    checkIn.value = checkOut.value;
  });

  onChangeMinPrice();
  onChangeRoomsNumber();
};

const formSubmitSucces = () => {
  openMessage(SUCCESS_TEMPLATE);
  AD_FORM.reset();
  showData();
};

const formSubmitError = () => {
  openMessage(ERROR_TEMPLATE);
};

const formSubmit = () => {
  AD_FORM.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const config = {
      method: 'POST',
      body: formData,
    };
    fetchData(formSubmitSucces, formSubmitError, URL_POST, config);
  });
  resetBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    AD_FORM.reset();
    onChangeRoomsNumber();
    showData();
    features.forEach((feature) => {
      feature.checked = false;
    });
  });
};

formSubmit();

export {formValidity};
