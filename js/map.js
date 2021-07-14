import {enablePage} from './utils.js';
import {fillOfferTemplate} from './fill-offer-template.js';
import {generateElement} from './generate-element.js';
import {createOffer} from './create-offer.js';

const address = document.querySelector('#address');
const startLat = 35.68867;
const startLng = 139.75021;
const offers = new Array(4).fill('').map((value, index) => createOffer(index));
const templateSelector = '#card';

const setAdressCoords = (lat, lng) => {
  address.value = `${lat}, ${lng}`;
};

const mapInit = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      enablePage();
      setAdressCoords(startLat, startLng);
    })
    .setView({
      lat: startLat,
      lng: startLng,
    }, 12);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
    },
  ).addTo(map);
  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [0, 0],
  });
  const mainPinMarker = L.marker(
    {
      lat: startLat,
      lng: startLng,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.addTo(map);
  mainPinMarker.on('moveend', (evt) => {
    const coords = evt.target.getLatLng();
    setAdressCoords(coords.lat, coords.lng);
  });

  const markerGroup = L.layerGroup().addTo(map);
  const createMarker = (data) => {
    const lat = data.location.lat;
    const lng = data.location.lng;
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );
    marker
      .addTo(markerGroup)
      .bindPopup(
        generateElement(templateSelector, fillOfferTemplate, data),
        {
          keepInView: true,
        },
      );
  };

  offers.forEach((offer, index) => {
    createMarker(offer, index);
  });
};

export {mapInit};
