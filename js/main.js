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
  // OFFERS_COUNT = 10,
  PRICE_START = 100,
  PRICE_END = 10000,
  ROOMS_START = 1,
  ROOMS_END = 10,
  GUESTS_START = 1,
  GUESTS_END = 20,
  LAT_START = 35.65000,
  LAT_END = 35.70000,
  LAT_DIGITS = 5,
  LNG_START = 139.70000,
  LNG_END = 139.80000,
  LNG_DIGITS = 5;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0,elements.length - 1)];

const shuffleFeatures = (array) => {
  const featuresData = array.slice(getRandomPositiveInteger(1, array.length - 1));
  for (let index = featuresData.length - 1; index > 0; index--) {
    const newIndex = Math.floor(Math.random() * (index + 1));
    [featuresData[index], featuresData[newIndex]] = [featuresData[newIndex], featuresData[index]];
  }
  return featuresData;
};

const createOffer = (offerIndex) => {
  const features = shuffleFeatures(FEATURES);
  const photos = new Array(getRandomPositiveInteger(1,PHOTOS.length - 1))
    .fill('')
    .map((value, index) => PHOTOS[index]);
  const avatarNumber = offerIndex < 10 ? `0${offerIndex}` : offerIndex;
  return {
    author: {
      avatar: `img/avatars/user${avatarNumber}.png`,
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

createOffer();
// const offers = new Array(OFFERS_COUNT).fill('').map((value, index) => createOffer(index + 1));
