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
    let collisionBehavior = google.maps.CollisionBehavior.REQUIRED;
    // @ts-ignore
    const select = new mdc.select.MDCSelect(document.querySelector('.mdc-select'));
    select.listen('MDCSelect:change', () => {
        collisionBehavior = select.value;
        markers.forEach((marker) => {
            marker.collisionBehavior = collisionBehavior;
        });
    });
    select.value = collisionBehavior;
    // Create some markers on the map
    let locations = [
        [42.3402, 42.6093],
        [42.3402, 42.6094],
        [42.3403, 42.6094],
        [42.3384, 42.6098],
        [42.3389, 42.6095],
        [42.3396, 42.6095],

    ];
    locations.forEach(([lng, lat]) => {
        // [START maps_advanced_markers_collision_create_marker]
        const advancedMarker = new AdvancedMarkerElement({
            position: new google.maps.LatLng({ lat, lng }),
            collisionBehavior: collisionBehavior,
        });
        mapElement.appendChild(advancedMarker);
        // [END maps_advanced_markers_collision_create_marker]
        markers.push(advancedMarker);
    });
}
initMap();
// [END maps_advanced_markers_collision]
