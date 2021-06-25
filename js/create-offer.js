import {shuffle} from './utils';
import {TYPES, TIMES, FEATURES, PHOTOS, PRICE_START, PRICE_END, ROOMS_START, ROOMS_END, GUESTS_START, GUESTS_END, LAT_START, LAT_END, LAT_DIGITS, LNG_START, LNG_END, LNG_DIGITS} from './const';
import {getRandomPositiveInteger} from './utils';
import {getRandomArrayElement} from './utils';
import {getRandomPositiveFloat} from './utils';

const createOffer = (offerIndex) => {
  const features = shuffle(FEATURES);
  const photos = new Array(getRandomPositiveInteger(1,PHOTOS.length))
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

export {createOffer};
