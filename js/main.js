import {getRandomPositiveFloat} from './utils/get-random-positive-float';
import {getRandomPositiveInteger} from './utils/get-random-positive-integer';

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  TIMES = ['12:00', '13:00', '14:00'],
  FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  PHOTOS = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
  // OFFERS_COUNT = 4,
  PRICE_START = 100,
  PRICE_END = 10000,
  ROOMS_START = 1,
  ROOMS_END = 10,
  GUESTS_START = 1,
  GUESTS_END = 20,
  AVATAR_LIM_A = 1,
  AVATAR_LIM_B = 10,
  LAT_START = 35.65000,
  LAT_END = 35.70000,
  LAT_DIGITS = 5,
  LNG_START = 139.70000,
  LNG_END = 139.80000,
  LNG_DIGITS = 5;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0,elements.length - 1)];

const createOffer = () => {
  const features = new Array(getRandomPositiveInteger(0,FEATURES.length - 1))
      .fill('')
      .map(() => getRandomArrayElement(FEATURES)),
    photos = new Array(getRandomPositiveInteger(1,PHOTOS.length - 1))
      .fill('')
      .map((value, index) => PHOTOS[index]);
  return {
    author: {
      avatar: `img/avatars/user${getRandomPositiveInteger(AVATAR_LIM_A, AVATAR_LIM_B)}.png`,
    },
    offer: {
      title: 'Heading',
      address: `${this.location.lat}, ${this.location.lng}`,
      price: getRandomPositiveInteger(PRICE_START, PRICE_END),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(ROOMS_START, ROOMS_END),
      guests: getRandomPositiveInteger(GUESTS_START, GUESTS_END),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features,
      description: 'Хорошее место',
      photos,
    },
    location: {
      lat: getRandomPositiveFloat(LAT_START, LAT_END, LAT_DIGITS),
      lng: getRandomPositiveFloat(LNG_START, LNG_END, LNG_DIGITS),
    },
  };
};

// const offers = new Array(OFFERS_COUNT).fill('').map(() => createOffer());
createOffer();
