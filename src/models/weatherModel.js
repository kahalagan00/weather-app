import { WEATHER_API_URL } from "../utils/config.js";

export const state = {
  image: "",
  city: "",
  country: "",
  forecast: {},
};

/**
 * Change the time format from military to standard
 * @param {Date} date
 * @returns {string}
 */
const changeToStandardTime = function (date) {
  let hours, minutes, format;
  hours = date.getHours();
  minutes = date.getMinutes();
  format = hours >= 12 ? "PM" : "AM";
  hours = hours % 12; // AM - PM format
  hours = hours ? hours : 0; // Displays 0 as 12 for noon
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + " " + format;
};

/**
 * Creates forecast object to store in the state
 * @param {Object} data
 */
const createForecast = function (data) {
  // TEMPERATURES
  const temperatureUnits = data.current_units.apparent_temperature;
  const avgTemp = `${Math.round(
    data.current.apparent_temperature
  )}${temperatureUnits}`;
  const maxTemp =
    Math.round(Math.max(...data.daily.apparent_temperature_max)) +
    temperatureUnits;
  const minTemp =
    Math.round(Math.max(...data.daily.apparent_temperature_min)) +
    temperatureUnits;

  // OTHER FORECAST PROPERTIES
  const cloudCover = `${data.current.cloud_cover}${data.current_units.cloud_cover}`;
  const precip = `${
    data.current.precipitation
  }${data.current_units.precipitation.slice(0, 2)}`;
  const humid = `${data.current.relative_humidity_2m}${data.current_units.relative_humidity_2m}`;
  const uv = Math.max(...data.daily.uv_index_max) + "";
  const wind =
    Math.max(...data.daily.wind_speed_10m_max) +
    data.daily_units.wind_speed_10m_max;
  const snow = `${data.current.snowfall}${data.current_units.snowfall.slice(
    0,
    2
  )}`;

  // Set sunrise and sunset hours to 12 hour format
  const sunriseOne = changeToStandardTime(new Date(data.daily.sunrise[0]));
  const sunsetOne = changeToStandardTime(new Date(data.daily.sunset[0]));

  state.forecast = {
    temperature: avgTemp,
    cloudCoverage: cloudCover,
    precipitation: precip,
    humidity: humid,
    maxTemperature: maxTemp,
    minTemperature: minTemp,
    sunrise: sunriseOne,
    sunset: sunsetOne,
    uvIndex: uv,
    windSpeed: wind,
    snowfall: snow,
  };
};

/**
 * Extraxts the weather forecast using the specified coordinates
 * @param {Number} lat
 * @param {Number} long
 * @param {String} city
 * @param {String} country
 * @param {String} imageUrl
 */
export const loadForecast = async function (
  lat,
  long,
  city = "Las Vegas",
  country = "United States",
  imageUrl = "../../assets/images/beach.jpg"
) {
  try {
    const url = `${WEATHER_API_URL}?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,snowfall,cloud_cover&daily=apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Error in extracting data from URL");
    }

    const data = await res.json();

    state.city = city;
    state.country = country;
    state.image = imageUrl;
    createForecast(data);
  } catch (err) {
    console.error(`${err} 🍔`);
  }
};
