import * as model from "../models/weatherModel.js";
import {
  POSITION_STACK_API_URL,
  POSITION_STACK_API_KEY,
  UNSPLASH_API_KEY,
  DEFAULT_LATITUDE,
  DEFAULT_LONGITUDE,
} from "../utils/config.js";
import weatherView from "../views/weatherView.js";

/**
 * Grabs an image from the Unsplash API using the city as a query
 * @param {String} city
 * @returns {String} URL of the image
 */
const grabCityImage = async function (city) {
  try {
    const unsplashRes = await fetch(
      `https://api.unsplash.com/search/photos?query=${city} City&client_id=${UNSPLASH_API_KEY}`
    );

    if (!unsplashRes.ok) {
      throw new Error("Unsplash API not able to grab image");
    }

    const unsplashData = await unsplashRes.json();
    const imageUrl = unsplashData.results[0].urls.regular;
    return imageUrl;
  } catch (err) {
    console.error(`${err} 🏙️`);
  }
};

/**
 * Initial controller function that calls the loading of the weather forecast
 */
const controlHeader = async function () {
  try {
    // Use default coordinates if the user doesn't want their location shared
    let lat = DEFAULT_LATITUDE;
    let long = DEFAULT_LONGITUDE;

    // Grab user's coordinates from the beginning
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
      });
    }

    // Use reverse geocoding initially
    const url = `${POSITION_STACK_API_URL}reverse?access_key=${POSITION_STACK_API_KEY}&query=${lat},${long}`;
    const res = await fetch(url);
    const { data } = await res.json();

    // Grabs city and country name
    const city = data[0].locality ? data[0].locality : data[0].region;
    const country = data[0].country;

    // Grabs image url based on city name
    const image = await grabCityImage(city);

    // Loads the forecast for the specified location
    await model.loadForecast(lat, long, city, country, image);

    // Renders the new information on the page
    weatherView.render(model.state);

    if (!res.ok) {
      throw new Error("City does not exist in the world");
    }
  } catch (err) {
    console.error(`${err} 🎮`);
  }
};

/**
 * Main controller function that changes the application's image and values
 * depending on what city the user searches for
 * @param {String} city
 */
const controlSearch = async function (city) {
  try {
    if (!city) {
      throw new Error("City is undefined");
    }

    // Forward geocoding to grab coordinates from the city name
    const url = `${POSITION_STACK_API_URL}forward?access_key=${POSITION_STACK_API_KEY}&query=${city}'`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("City does not exist in the world");
    }

    // Grabs coordinates and country name
    const { data } = await res.json();
    const lat = data[0].latitude;
    const long = data[0].longitude;
    const country = data[0].country;

    // Grabs image url based on city name
    const image = await grabCityImage(city);

    // Loads the forecast for the specified location
    await model.loadForecast(lat, long, city, country, image);

    // Renders the new information on the page
    weatherView.update(model.state);
  } catch (err) {
    console.error(`${err} 🕹️`);
  }
};

export const setupWeather = function () {
  weatherView.addHandlerRender(controlHeader);
  weatherView.addHandlerSearch(controlSearch);
};
