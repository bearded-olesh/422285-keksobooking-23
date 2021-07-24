import {enableAdForm, enablefiltersForm} from './utils.js';
import {fillOfferTemplate} from './fill-offer-template.js';
import {generateElement} from './generate-element.js';
import {openMessage} from './utils.js';
import {fetchData} from './api.js';
import {START_LAT, START_LNG, START_SCALE, URL_GET, COORDS_FRACTION, MAP_TITLE, MAP_COPYRIGHT} from './const.js';
import {filterAds} from './filters-form.js';

const templateSelector = '#card';

const setAdressCoords = (lat, lng) => {
  const address = document.querySelector('#address');
  address.value = `${lat.toFixed(COORDS_FRACTION)}, ${lng.toFixed(COORDS_FRACTION)}`;
};
let map = {};
let markerGroup = {};
let mainPinMarker = {};
const mapInit = () => {
  map = L.map('map-canvas')
    .on('load', () => {
      enableAdForm();
      setAdressCoords(START_LAT, START_LNG);
    })
    .setView({
      lat: START_LAT,
      lng: START_LNG,
    }, START_SCALE);
  L.tileLayer(
    MAP_TITLE,
    {
      attribution: MAP_COPYRIGHT,
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
      lat: START_LAT,
      lng: START_LNG,
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
  enablefiltersForm();
};

const resetMainPinMarker = () => {
  mainPinMarker.setLatLng({
    lat: START_LAT,
    lng: START_LNG,
  });
};

const showData = () => {
  markerGroup.clearLayers();

  setAdressCoords(START_LAT, START_LNG);
  map.setView({
    lat: START_LAT,
    lng: START_LNG,
  }, START_SCALE);

  const showMarkers = (data) => {
    filterAds(data.slice())
      .forEach((offer) => {
        createMarker(offer);
      });
  };

  const showError = () => {
    const errorTemplateSelector = '#error-map';
    openMessage(errorTemplateSelector);
  };

  fetchData(showMarkers, showError, URL_GET);
};

export {mapInit, showData, resetMainPinMarker};
