const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
}

function handleGeoError(position) {
  console.log("not find");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem("COORDS");
  if (loadedCoords === null) {
    askForCoords();
  } else {
    getWeather();
  }
}

function init() {
  loadCoords();
}

init();
