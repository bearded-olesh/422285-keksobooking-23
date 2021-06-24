import {shuffleFeatures} from './shuffle-features';
import * as OFFER from '../const';
import {getRandomPositiveInteger} from './get-random-positive-integer';
import {getRandomArrayElement} from './get-random-array-element';
import {getRandomPositiveFloat} from './get-random-positive-float';

const createOffer = (offerIndex) => {
  const features = shuffleFeatures(OFFER.FEATURES);
  const photos = new Array(getRandomPositiveInteger(1,OFFER.PHOTOS.length - 1))
    .fill('')
    .map((value, index) => OFFER.PHOTOS[index]);
  const avatarNumber = offerIndex < 10 ? `0${offerIndex}` : offerIndex;
  return {
    author: {
      avatar: `img/avatars/user${avatarNumber}.png`,
    },
    offer: {
      title: 'Heading',
      address: `${this.location.lat}, ${this.location.lng}`,
      price: getRandomPositiveInteger(OFFER.PRICE_START, OFFER.PRICE_END),
      type: getRandomArrayElement(OFFER.TYPES),
      rooms: getRandomPositiveInteger(OFFER.ROOMS_START, OFFER.ROOMS_END),
      guests: getRandomPositiveInteger(OFFER.GUESTS_START, OFFER.GUESTS_END),
      checkin: getRandomArrayElement(OFFER.TIMES),
      checkout: getRandomArrayElement(OFFER.TIMES),
      features,
      description: 'Хорошее место',
      photos,
    },
    location: {
      lat: getRandomPositiveFloat(OFFER.LAT_START, OFFER.LAT_END, OFFER.LAT_DIGITS),
      lng: getRandomPositiveFloat(OFFER.LNG_START, OFFER.LNG_END, OFFER.LNG_DIGITS),
    },
  };
};

export {createOffer};
