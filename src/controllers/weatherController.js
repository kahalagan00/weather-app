import * as model from "../models/weatherModel.js";
import {
  POSITION_STACK_API_URL,
  POSITION_STACK_API_KEY,
  DEFAULT_LATITUDE,
  DEFAULT_LONGITUDE,
} from "../utils/config.js";
import weatherView from "../views/weatherView.js";

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

    const url = `http://api.positionstack.com/v1/reverse?access_key=${POSITION_STACK_API_KEY}&query=${lat},${long}`;
    console.log(url);
    const res = await fetch(url);

    const { data } = await res.json();
    console.log(data[0]);
    const city = data[0].locality ? data[0].locality : data[0].region;
    const country = data[0].country;

    // Loads the forecast for the specified location
    await model.loadForecast(lat, long, city, country);

    // Renders the new information on the page
    weatherView.render(model.state);

    if (!res.ok) {
      throw new Error("City does not exist in the world");
    }
  } catch (err) {
    console.error(`${err} 🎮`);
  }
};

const controlSearch = async function (city) {
  try {
    if (!city) {
      throw new Error("City is undefined");
    }

    const res = await fetch(
      `${POSITION_STACK_API_URL}forward?access_key=${POSITION_STACK_API_KEY}&query=${city}'`
    );

    if (!res.ok) {
      throw new Error("City does not exist in the world");
    }

    const { data } = await res.json();
    console.log(data[0]);
    const lat = data[0].latitude;
    const long = data[0].longitude;
    const country = data[0].country;

    // Loads the forecast for the specified location
    await model.loadForecast(lat, long, city, country);

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
