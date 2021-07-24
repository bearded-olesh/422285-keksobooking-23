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
  const insertData = (element, data) => {
    if (data) {
      element.textContent = data;
    } else {
      element.remove();
    }
  };

  insertData(popupTitle, offerData.offer.title);
  insertData(popupTextAddress, offerData.offer.address);
  insertData(popupTextPrice, `${offerData.offer.price} ₽/ночь`);
  insertData(popupType, TYPE_CAST[offerData.offer.type]);
  insertData(popupTextCapacity, `${offerData.offer.rooms} комнаты для ${offerData.offer.guests} гостей`);
  insertData(popupTextTime,`Заезд после ${offerData.offer.checkin}, выезд до ${offerData.offer.checkout}`);
  insertData(popupDescription, offerData.offer.description);
  const AD_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

  const setFeatures = () => {
    const cardFeatures = features || [];
    const unusedFeatures = AD_FEATURES.filter((feature) => !cardFeatures.includes(feature));

    if (cardFeatures.length) {
      unusedFeatures.forEach((unusedFeature) => {
        popupFeatures.querySelector(`[class*="--${unusedFeature}"]`).remove();
      });
    } else {
      popupFeatures.remove();
    }
  };
  setFeatures();

  popupPhotos.innerHTML = '';
  if (photos) {
    photos.forEach((photo) => {
      popupPhotos.insertAdjacentHTML('beforeend', `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`);
    });
  } else {
    popupPhotos.remove();
  }

  if (offerData.author.avatar) {
    popupAvatar.src = offerData.author.avatar;
  } else {
    popupAvatar.remove();
  }
};

export {fillOfferTemplate};
