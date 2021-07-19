import {enablePage} from './utils.js';
import {fillOfferTemplate} from './fill-offer-template.js';
import {generateElement} from './generate-element.js';
import {openMessage} from './utils.js';
import {getData} from './api.js';

const startLat = 35.68867;
const startLng = 139.75021;
const startScale = 13;
const templateSelector = '#card';

const setAdressCoords = (lat, lng) => {
  const address = document.querySelector('#address');
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};
let map = {};
let markerGroup = {};
let mainPinMarker = {};
const mapInit = () => {
  map = L.map('map-canvas')
    .on('load', () => {
      enablePage();
      setAdressCoords(startLat, startLng);
    })
    .setView({
      lat: startLat,
      lng: startLng,
    }, startScale);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
    },
  ).addTo(map);
  markerGroup = L.layerGroup().addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [0, 0],
  });

  mainPinMarker = L.marker(
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
};

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
const showData = () => {
  markerGroup.clearLayers();
  mainPinMarker.setLatLng({
    lat: startLat,
    lng: startLng,
  });
  setAdressCoords(startLat, startLng);
  map.setView({
    lat: startLat,
    lng: startLng,
  }, startScale);
  const showMarkers = (data) => {
    data.slice(0, 10).forEach((offer) => {
      createMarker(offer);
    });
  };
  const showError = () => {
    const errorTemplateSelector = '#error-map';
    openMessage(errorTemplateSelector);
  };

  getData(showMarkers, showError);
};

export {mapInit, showData};
