
const mapElement = document.querySelector('gmp-map');

async function initMap() {
 
    const { Map } = (await google.maps.importLibrary('maps'));
    const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker'));
    let markers = [];

    
        const advancedMarker = new AdvancedMarkerElement({
            position: new google.maps.LatLng({42, 42}),
            collisionBehavior: collisionBehavior,   });

         <gmp-map center="42.773,42.01" zoom="8" map-id="8b37d7206ccf0121d4414bb0">
  <gmp-advanced-marker position="42.4220656,42.0840897" title="Mountain View, CA"></gmp-advanced-marker>
  <gmp-advanced-marker position="42.648994,42.3503845" title="Seattle, WA"></gmp-advanced-marker>
</gmp-map>


    
    

}
initMap();
// [END maps_advanced_markers_collision]
