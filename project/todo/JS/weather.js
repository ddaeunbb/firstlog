const API_KEY = "3c98b8415874832af31ce4ea1b2af530";

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);

function GeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `${data.main.temp} ℃`;
    });
}

function GeoError() {
  alert("Oops, We lost you.");
}
