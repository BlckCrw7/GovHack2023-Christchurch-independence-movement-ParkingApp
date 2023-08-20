/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example creates a simple polygon representing the Bermuda Triangle.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16.5,
    center: { lat: -43.537940, lng: 172.644222 },
    mapTypeId: "terrain",

  });
  // Define the LatLng coordinates for the polygon's path.
  const stAsaphStLeftCoords = [
    { lat: -43.536368, lng: 172.642664 },
    { lat: -43.537243, lng: 172.642671 },
    { lat: -43.537243, lng: 172.642605 },
    { lat: -43.536368, lng: 172.642584 },
  ];
  // Construct the polygon.
  const stAsaphStLeftTriangle = new google.maps.Polygon({
    paths: stAsaphStLeftCoords,
    strokeColor: "#48f542",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#48f542",
    fillOpacity: 0.35,
  });
  
  stAsaphStLeftTriangle.setMap(map);
  
    // Define the LatLng coordinates for the polygon's path.
  const SouthHwarkStCoords = [
    { lat: -43.537327, lng: 172.642589 },
    { lat: -43.537305, lng: 172.642628 },
    { lat: -43.537817, lng: 172.642628 },
    { lat: -43.537803, lng: 172.642617 },
  ];
  // Construct the polygon.
  const SouthHwarkStTriangle = new google.maps.Polygon({
    paths: SouthHwarkStCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  SouthHwarkStTriangle.setMap(map);
}

window.initMap = initMap;
