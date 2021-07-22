import {FILTERS_FORM} from './const.js';
import {debounce} from './utils.js';

let onFilterForm = () => {};
const filtersFormInit = (callback) => {
  onFilterForm = debounce(callback);
  FILTERS_FORM.addEventListener('change', onFilterForm);
};

const getFeaturesContainers = () => document.querySelectorAll('#housing-features input[type="checkbox"]:checked');
const inputType = document.querySelector('#housing-type');
const inputPrice = document.querySelector('#housing-price');
const inputRooms = document.querySelector('#housing-rooms');
const inputGuests = document.querySelector('#housing-guests');
const any = 'any';
const priceRange = {
  'low': {
    'min': 0,
    'max': 9999,
  },
  'middle': {
    'min': 10000,
    'max': 49999,
  },
  'high': {
    'min': 50000,
    'max': 1000000,
  },
  'any': {
    'min': 0,
    'max': 1000000,
  },
};

const isTypeEqual = (data, typeVal) => typeVal === data.offer.type || typeVal === any;
const isPriceEqual = (data, priceVal) => {
  const min = priceRange[priceVal].min;
  const max = priceRange[priceVal].max;

  return data.offer.price > min && data.offer.price < max;
};
const isRoomsEqual = (data, roomsVal) => data.offer.rooms === parseInt(roomsVal, 10) || roomsVal === any;
const isGuestsEqual = (data, guestsVal) => data.offer.guests === parseInt(guestsVal, 10) || guestsVal === any;
const isFeaturesEqual = ({offer}) => {
  const offerFeatures = offer.features || [];
  const filterFeatures = [...getFeaturesContainers()]
    .map((filterFeaturesContainer) => filterFeaturesContainer.value)
    .filter(Boolean);
  return filterFeatures.every((filterFeature) => offerFeatures.includes(filterFeature));
};

const filterAds = (ads) => {
  const filteredAds = [];
  const type = inputType.value;
  const price = inputPrice.value;
  const rooms = inputRooms.value;
  const guests = inputGuests.value;

  ads.forEach((ad) => {
    if (
      isTypeEqual(ad, type)
      && isPriceEqual(ad, price)
      && isRoomsEqual(ad, rooms)
      && isGuestsEqual(ad, guests)
      && isFeaturesEqual(ad)
    ) {
      filteredAds.push(ad);
    }
  });

  return filteredAds;
};

export {filterAds, filtersFormInit};
