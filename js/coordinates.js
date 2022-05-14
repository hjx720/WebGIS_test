import { transform } from "ol/proj";
import { format } from "ol/coordinate";

function coords_pointermove(event) {
    let coord3857 = event.coordinate;
    let coord4326 = transform(coord3857, 'EPSG:3857', 'EPSG:4326');
    document.getElementById('mouseCoord4326').innerHTML = format(coord4326, "{x}, {y}", 8);
}

export{coords_pointermove};