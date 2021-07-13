import {DISPLAY} from './const.js';

const title = document.querySelector('#title');
const price = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const type = document.querySelector('#type');
const capacities = capacity.options;
const checkIn = document.querySelector('#timein');
const checkOut = document.querySelector('#timeout');
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
const typesSelector = {
  'flat': 1000,
  'bungalow': 0,
  'house': 5000,
  'palace': 10000,
  'hotel': 3000,
};

const calculateCapacity = () => {
  const val = roomNumber.value;
  roomsSelector[val].statuses.forEach((status, index) => {
    if (status) {
      capacities[index].style.display = DISPLAY.BLOCK;
      capacity.selectedIndex = roomsSelector[val].defaultIndex;
    } else {
      capacities[index].style.display = DISPLAY.NONE;
    }
  });
};

const setMinPrice = () => {
  const val = typesSelector[type.value];
  price.setAttribute('min', val);
  price.setAttribute('placeholder', val);
};

const formValidity = () => {
  title.addEventListener('input', () => {
    if (title.validity.tooShort) {
      title.setCustomValidity('Заголовок объявления должен состоять минимум из 30 символов');
    } else if (title.validity.tooLong) {
      title.setCustomValidity('Заголовок объявления не должен превышать 100 символов');
    } else  {
      title.setCustomValidity('');
    }

    title.reportValidity();
  });

  price.addEventListener('input', () => {
    if (price.validity.rangeOverflow) {
      price.setCustomValidity('Цена не должна превышать 1000000');
    } else  {
      price.setCustomValidity('');
    }

    price.reportValidity();
  });

  roomNumber.addEventListener('change', calculateCapacity);

  type.addEventListener('change', setMinPrice);

  checkIn.addEventListener('change', () => {
    checkOut.value = checkIn.value;
  });

  checkOut.addEventListener('change', () => {
    checkIn.value = checkOut.value;
  });

  setMinPrice();
  calculateCapacity();
};

export {formValidity};
