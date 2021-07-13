import {TYPE_CAST} from './const.js';

const fillOfferTemplate = (template, offerData) => {
  const popupTitle = template.querySelector('.popup__title');
  const popupTextAddress = template.querySelector('.popup__text--address');
  const popupTextPrice = template.querySelector('.popup__text--price');
  const popupType = template.querySelector('.popup__type');
  const popupTextCapacity = template.querySelector('.popup__text--capacity');
  const popupTextTime = template.querySelector('.popup__text--time');
  const popupFeatures = template.querySelector('.popup__features');
  const features = offerData.offer.features;
  const popupDescription = template.querySelector('.popup__description');
  const popupPhotos = template.querySelector('.popup__photos');
  const photos = offerData.offer.photos;
  const popupAvatar = template.querySelector('.popup__avatar');

  popupTitle.textContent = offerData.offer.title;
  popupTextAddress.textContent = offerData.offer.address;
  popupTextPrice.textContent = `${offerData.offer.price} ₽/ночь`;
  popupType.textContent = TYPE_CAST[offerData.offer.type];
  popupTextCapacity.textContent = `${offerData.offer.rooms} комнаты для ${offerData.offer.guests} гостей`;
  popupTextTime.textContent = `Заезд после ${offerData.offer.checkin}, выезд до ${offerData.offer.checkout}`;
  popupFeatures.innerHTML = '';
  features.forEach((feature) => {
    popupFeatures.insertAdjacentHTML('beforeend', `<li class="popup__feature popup__feature--${feature}"></li>`);
  });
  popupDescription.textContent = offerData.offer.description;
  popupPhotos.innerHTML = '';
  photos.forEach((photo) => {
    popupPhotos.insertAdjacentHTML('beforeend', `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`);
  });
  popupAvatar.setAttribute('src', offerData.author.avatar);
};

export {fillOfferTemplate};
