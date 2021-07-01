import {createOffer} from './create-offer.js';
import {TYPE_CAST} from './const.js';

const fillOfferTemplate = (template, index) => {
  const data = createOffer(index);
  const popupTitle = template.querySelector('.popup__title');
  const popupTextAddress = template.querySelector('.popup__text--address');
  const popupTextPrice = template.querySelector('.popup__text--price');
  const popupType = template.querySelector('.popup__type');
  const popupTextCapacity = template.querySelector('.popup__text--capacity');
  const popupTextTime = template.querySelector('.popup__text--time');
  const popupFeatures = template.querySelector('.popup__features');
  const features = data.offer.features;
  const popupDescription = template.querySelector('.popup__description');
  const popupPhotos = template.querySelector('.popup__photos');
  const photos = data.offer.photos;
  const popupAvatar = template.querySelector('.popup__avatar');

  popupTitle.textContent = data.offer.title;
  popupTextAddress.textContent = data.offer.address;
  popupTextPrice.textContent = `${data.offer.price} ₽/ночь`;
  popupType.textContent = TYPE_CAST[data.offer.type];
  popupTextCapacity.textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  popupTextTime.textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
  popupFeatures.innerHTML = '';
  features.forEach((feature) => {
    popupFeatures.insertAdjacentHTML('beforeend', `<li class="popup__feature popup__feature--${feature}"></li>`);
  });
  popupDescription.textContent = data.offer.description;
  popupPhotos.innerHTML = '';
  photos.forEach((photo) => {
    popupPhotos.insertAdjacentHTML('beforeend', `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`);
  });
  popupAvatar.setAttribute('src', data.author.avatar);
};

export {fillOfferTemplate};
