import {generateElement} from './generate-element.js';
import {fillOfferTemplate} from './fill-offer-template.js';

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.append(generateElement('#card', 1, fillOfferTemplate));
