import './style.css';
import './css/font_awesome/css/all.css';
import './css/sidebar.css';
import './js/sidebar.js';
import './js/coordinates';

import { map_events } from './js/map_events';
import {Map, View} from 'ol';
import {fromLonLat} from 'ol/proj';
import { BASELAYER } from './js/baselayer';
import { createLayerPanel } from './js/layerpanel';

const start_center = fromLonLat([9.977, 53.541]);
const start_zoom = 13;

let map = new Map({
  target: 'map'
});

map.addLayer(BASELAYER);

let map_view = new View({
  center: start_center,
  zoom: start_zoom
});

map.setView(map_view);

map_events(map);
createLayerPanel('baselayer', [BASELAYER]);
