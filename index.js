"use strict";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// eslint-disable no-undef
// [START maps_advanced_markers_collision]
const mapElement = document.querySelector('gmp-map');
// Initialize and add the map
async function initMap() {
    // Request needed libraries.
    const { Map } = (await google.maps.importLibrary('maps'));
    const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker'));
    let markers = [];
        const advancedMarker = new AdvancedMarkerElement({
            position: new google.maps.LatLng({42,42})     });
    
    
   
}
initMap();
// [END maps_advanced_markers_collision]
