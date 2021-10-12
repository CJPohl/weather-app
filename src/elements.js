import { scripts } from "./script";

// module to create dom elements
const elements = (() => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  // init the page
  function initPage() {
    document.body.appendChild(mainContainer);
    _getGifBackground();
    _createHeader();
    _createInput();
    _createFooter();
    scripts.addInputListener();
  }

  // weather page
  function createWeatherPage() {
    renderPage();
    _createContainers();
    _createTempBtn();
    scripts.addBtnListener();
  }

  // using class info from api, fill the weather containers with selected info
  function fillContainer(object, tempMode) {
    const container1 = document.getElementById("w0");
    const container2 = document.getElementById("w1");
    const container3 = document.getElementById("w2");

    const current = scripts.convert(object.current, object);
    const high = scripts.convert(object.high, object);
    const low = scripts.convert(object.low, object);

    const sign = tempMode.charAt(0).toUpperCase();

    container1.innerHTML = `
            <div><h1>${object.name}</h1></div>
        `;
    container2.innerHTML = `
            <div>
                <h5>Current</h5>
                <p>${current}°${sign}</p>
            </div>
            <div>
                <h5>High</h5>
                <p>${high}°${sign}</p>
            </div>
            <div>
                <h5>Low</h5>
                <p>${low}°${sign}</p>
            </div>
        `;
    container3.innerHTML = `
            <div>
                <p>${object.type}</p>
                <img src="http://openweathermap.org/img/w/${object.icon}.png">
            </div>
            <div>
                <p>Humidity</p>
                <p>${object.humidity}%</p>
            </div>
        `;
  }

  // clear page
  function renderPage() {
    mainContainer.innerHTML = "";
  }

  // create weather containers
  function _createContainers() {
    for (let i = 0; i < 3; i++) {
      const weatherContainer = document.createElement("div");
      weatherContainer.classList.add("weather-container");
      weatherContainer.setAttribute("id", `w${i}`);
      mainContainer.appendChild(weatherContainer);
    }
  }

  // temp change btn
  function _createTempBtn() {
    const tempBtn = document.createElement("button");
    tempBtn.classList.add("temp-btn");
    tempBtn.textContent = "F°/C°";
    mainContainer.appendChild(tempBtn);
  }

  // header
  function _createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = `
            <p>Simple Weather</p>
        `;
    mainContainer.appendChild(header);
  }

  // input bar
  function _createInput() {
    const input = document.createElement("div");
    input.classList.add("input");
    input.innerHTML = `
            <i class="fas fa-search"></i><input type="text" id="location" placeholder="Enter a city" required>
        `;
    mainContainer.appendChild(input);
  }

  // create footer
  function _createFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.innerHTML = `
            <p>Copyright @ 2021 Christopher J. Pohl</p><a href="https://github.com/CJPohl"><i class="fab fa-github"></i></a>
        `;
    mainContainer.appendChild(footer);
  }

  // from giphy api add background image
  function _getGifBackground() {
    const img = document.createElement("img");
    img.classList.add("gif-background");
    document.body.appendChild(img);
    img.src =
      "https://media0.giphy.com/media/xT9GEDhzERbjDD15O8/giphy.gif?cid=c055d487074b4dc39ac961aacbf05c265a2e0bb0136c4c8f&rid=giphy.gif&ct=g";
  }

  return {
    initPage,
    renderPage,
    createWeatherPage,
    fillContainer,
  };
})();

export { elements };
