const mapboxgl = require("mapbox-gl");
let buildMarker = require ('./marker.js')

mapboxgl.accessToken = 'pk.eyJ1IjoianQ1MzAxIiwiYSI6ImNrMTZtMWhxczE3NnQzY3JzY3VwM2F1MXIifQ.7zWlulXTVU80rtTODitN8g'

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


// var el = document.createElement('div')

// el.style.width = "32px";
// el.style.height = "39px";
// el.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
// el.className = ('marker')

// new mapboxgl.Marker(el).setLngLat([-74.009151, 40.705086]).addTo(map);
const newMarker = buildMarker('Hotel',[-87.6354, 41.8885])

newMarker.addTo(map)

