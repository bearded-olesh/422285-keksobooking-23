import {generateElement} from './generate-element.js';
import {fillOfferTemplate} from './fill-offer-template.js';
import {formValidity} from './form-processing.js';

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.append(generateElement('#card', 1, fillOfferTemplate));
formValidity();
