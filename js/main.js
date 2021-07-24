import {formValidity} from './ad-form.js';
import {mapInit, showData} from './map.js';
import {disablePage} from './utils.js';
import {filtersFormInit} from './filters-form.js';

disablePage();
formValidity();
mapInit();
filtersFormInit(showData);
showData();
