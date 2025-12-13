
const mapElement = document.querySelector('gmp-map');

async function initMap() {
 
    const { Map } = (await google.maps.importLibrary('maps'));
    const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker'));
    let markers = [];

    
        const advancedMarker = new AdvancedMarkerElement({
            position: new google.maps.LatLng({42, 42}),
            collisionBehavior: collisionBehavior,   });


    
    

}
initMap();
// [END maps_advanced_markers_collision]
