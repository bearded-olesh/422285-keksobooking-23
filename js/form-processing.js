import {disablePage, enablePage} from './utils.js';
import {NO_GUESTS_CAPACITY} from './const.js';

disablePage();
enablePage();

const title = document.querySelector('#title');
const price = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacitys = capacity.options;

const calculatingСapacity = () => {
  const val = roomNumber.value;
  if (parseFloat(val) !== NO_GUESTS_CAPACITY) {
    for (let index = 0; index < capacitys.length; index++) {
      capacitys[index].style.display = 'none';
      if (parseFloat(capacitys[index].value) !== 0 && val >= capacitys[index].value) {
        capacitys[index].style.display = 'block';
        capacitys[index].selected = 'true';
      }
    }
  } else {
    for (let index = 0; index < capacitys.length; index++) {
      capacitys[index].style.display = 'none';
      if (parseFloat(capacitys[index].value) === 0) {
        capacitys[index].style.display = 'block';
        capacitys[index].selected = 'true';
      }
    }
  }
};

const formSubmit = () => {
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

  roomNumber.addEventListener('change', calculatingСapacity);
};

calculatingСapacity();
export {formSubmit};
