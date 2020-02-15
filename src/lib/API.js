/* eslint-disable */

const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '21ce3cf9465f25e46d479f7193b7cd97';
const location = '37.8267,-122.4233';
const API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;

function getCoordinates(location) {
  return fetch(`${GEO_API_URL}${location}`)
    .then(response => response.json());
}

function getForecast(lat, lon) {
  return fetch(`${API_URL}${lat},${lon}?units=si`)
    .then(response =>
        response.json()
  );
}

function getAddress(lat, lon) {
  return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lon}`)
    .then(response =>
        response.json()
  );
}

function getEmbedURL(lat, lng) {
    return `https://maps.darksky.net/@temperature,${lat},${lng},11?domain="+encodeURIComponent(window.location.href)+"&auth=1525213550_b5fc128e7789bb56048952cc704c8473&embed=true&amp;timeControl=false&amp;fieldControl=false&amp;`;
  }

export default {
  getForecast,
  getCoordinates,
  getAddress,
  getEmbedURL
};
