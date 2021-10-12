import { elements } from "./elements";
import { objects } from "./objects";

const scripts = (() => {
  // variable to store weather class
  let object;

  // set temp type
  const DEFAULT_TEMP_MODE = "f";
  let tempMode = DEFAULT_TEMP_MODE;

  // add key listener for text input
  function addInputListener() {
    const location = document.getElementById("location");
    document.addEventListener("keypress", (e) => {
      if (e.keyCode === 13 && location.value !== "") {
        elements.createWeatherPage();
        _searchWeather(location.value);
      }
    });
  }

  // add btn listener for temp change
  function addBtnListener() {
    const btn = document.querySelector(".temp-btn");
    btn.addEventListener("click", _changeTempMode);
  }

  // use the api to return important weather details
  async function _searchWeather(location) {
    try {
      const weather = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=a4ee5fcc3386c99af852f2e5c67c9976`
      );
      const weatherJSON = await weather.json();
      _createWeatherObject(weatherJSON);
    } catch (err) {
      elements.renderPage();
      alert(`Error: ${err}\n\nPlease enter a real city`);
      window.location.reload(false);
    }
  }

  // parse api json and create weather class
  function _createWeatherObject(weatherJSON) {
    const name = weatherJSON.name;
    const current = weatherJSON.main.temp;
    const high = weatherJSON.main.temp_max;
    const low = weatherJSON.main.temp_min;
    const humidity = weatherJSON.main.humidity;
    const type = weatherJSON.weather[0].main;
    const icon = weatherJSON.weather[0].icon;
    object = new objects.Weather(
      name,
      current,
      high,
      low,
      humidity,
      type,
      icon
    );

    elements.fillContainer(object, tempMode);
  }

  // convert current temp
  function convert(kelvin, object) {
    if (tempMode === "f") {
      return object.convertToF(kelvin);
    } else {
      return object.convertToC(kelvin);
    }
  }

  // change temp mode
  function _changeTempMode() {
    if (tempMode === "f") {
      tempMode = "c";
    } else {
      tempMode = "f";
    }
    elements.fillContainer(object, tempMode);
  }

  return {
    addInputListener,
    addBtnListener,
    convert,
  };
})();

export { scripts };
