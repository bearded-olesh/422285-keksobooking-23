import {shuffle} from './utils.js';
import {TYPES, TIMES, FEATURES, PHOTOS, PRICE_START, PRICE_END, ROOMS_START, ROOMS_END, GUESTS_START, GUESTS_END, LAT_START, LAT_END, LAT_DIGITS, LNG_START, LNG_END, LNG_DIGITS} from './const.js';
import {getRandomPositiveInteger} from './utils.js';
import {getRandomArrayElement} from './utils.js';
import {getRandomPositiveFloat} from './utils.js';

const createOffer = (offerIndex) => {
  const features = shuffle(FEATURES).slice(getRandomPositiveInteger(1, FEATURES.length - 1));
  const photos = new Array(getRandomPositiveInteger(1,PHOTOS.length))
    .fill('')
    .map((value, index) => PHOTOS[index]);
  const avatarNumber = offerIndex < 10 ? `0${offerIndex}` : offerIndex;
  const locationLat = getRandomPositiveFloat(LAT_START, LAT_END, LAT_DIGITS);
  const locationLng = getRandomPositiveFloat(LNG_START, LNG_END, LNG_DIGITS);
  return {
    author: {
      avatar: `img/avatars/user${avatarNumber}.png`,
    },
    offer: {
      title: 'Heading',
      address: `${locationLat}, ${locationLng}`,
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
      lat: locationLat,
      lng: locationLng,
    },
  };
};

export {createOffer};
