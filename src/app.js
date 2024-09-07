/**
 * @author Joshmar Morales
 */
import { setupWeather } from "./controllers/weatherController.js";

const init = function () {
  console.log("Start application");
  setupWeather();
};

init();
