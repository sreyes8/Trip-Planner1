module.exports = function buildMarker(type, coordinates){
  console.log('this function is running')
  let newMarker = document.createElement('div')
  newMarker.style.width = "32px";
  newMarker.style.height = "39px";
  if(type === 'Activity'){
    newMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
  }
  if(type === 'Hotel'){
    newMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png"
  }
  if(type === 'Restaurant'){
    newMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
  }
return new mapboxgl.Marker(newMarker).setLngLat(coordinates)
