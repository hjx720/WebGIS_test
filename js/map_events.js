import { coords_pointermove } from "./coordinates";

export function map_events(map) {
    map.on('pointermove', event => {
        coords_pointermove(event);
    })
}
