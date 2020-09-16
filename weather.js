const weather = document.querySelector(".js-weather");
const API_key = "2bbe30ef9fb2f7435327c085632b1349";
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
  )
    .then(function (reponse) {
      return reponse.json();
    })
    .then(function (json) {
      console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      const type = json.weather[0].main;
      weather.innerHTML = `${temperature}°C / ${type} / ${place}`;
    });
}

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
  getWeather(latitude, longitude);
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
