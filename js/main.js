import {formValidity} from './form-processing.js';
import {mapInit, showData} from './map.js';
import {disablePage} from './utils.js';

disablePage();
formValidity();
mapInit();
showData();
