
const mapElement = document.querySelector('gmp-map');

async function initMap() {
 
    const { Map } = (await google.maps.importLibrary('maps'));
    const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker'));
    let markers = [];
   
        const advancedMarker = new AdvancedMarkerElement({ position="42.4220656,42.0840897"  });
   

}
initMap();
// [END maps_advanced_markers_collision]
