class WeatherView {
  _data;
  _headerEl = document.querySelector(".card__header");
  _cardEl = document.querySelector(".card");
  _bodyItem1 = document.querySelector(".card__body-item-1");
  _bodyItem2 = document.querySelector(".card__body-item-2");
  _bodyItem3 = document.querySelector(".card__body-item-3");
  _bodyItem4 = document.querySelector(".card__body-item-4");
  _bodyItem5 = document.querySelector(".card__body-item-5");
  _bodyItem6 = document.querySelector(".card__body-item-6");
  _bodyItem7 = document.querySelector(".card__body-item-7");
  _bodyItem8 = document.querySelector(".card__body-item-8");
  _searchBox = document.querySelector(".card__search-box");
  _searchBtn = document.querySelector(".card__search-btn");
  _errorMessage = "Unable to output header content";

  addHandlerRender(handler) {
    handler();
  }

  addHandlerSearch(handler) {
    this._searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const city = this.capitalizeCity(this._searchBox.value);
      this._searchBox.value = "";
      handler(city);
    });
    this._searchBox.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const city = this.capitalizeCity(this._searchBox.value);
        this._searchBox.value = "";
        handler(city);
      }
    });
  }

  render(data) {
    this._data = data;
    this._generateMarkup();
  }

  update(data) {
    this._data = data;
    this._headerEl.removeChild(this._headerEl.lastElementChild);
    for (let i = 0; i < 2; ++i) this._clearMarkup();
    this._generateMarkup();
  }

  capitalizeCity(city) {
    const formattedCity = city
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
    return formattedCity;
  }

  _clearMarkup() {
    this._headerEl.removeChild(this._headerEl.lastElementChild);
    this._bodyItem1.removeChild(this._bodyItem1.lastElementChild);
    this._bodyItem2.removeChild(this._bodyItem2.lastElementChild);
    this._bodyItem3.removeChild(this._bodyItem3.lastElementChild);
    this._bodyItem4.removeChild(this._bodyItem4.lastElementChild);
    this._bodyItem5.removeChild(this._bodyItem5.lastElementChild);
    this._bodyItem6.removeChild(this._bodyItem6.lastElementChild);
    this._bodyItem7.removeChild(this._bodyItem7.lastElementChild);
    this._bodyItem8.removeChild(this._bodyItem8.lastElementChild);
  }

  /**
   * Changes the background image of the card and the weather forecast values
   */
  _generateMarkup() {
    // Change background image based on passed imageURL from Unsplash
    this._cardEl.style.backgroundImage = `
      linear-gradient(
        0deg,
        rgba(101, 60, 103, 0.65) 0%,
        rgba(161, 62, 92, 0.65) 39%,
        rgba(177, 80, 55, 0.65) 100%
      ),
      url('${this._data.image}')
    `;

    const headerMarkup = `
      <p class="paragraph-1">${this._data.city}, ${this._data.country}</p>
      <h2 class="heading-2">${this._data.forecast.temperature}</h2>
      <p class="paragraph-1">L: ${this._data.forecast.minTemperature} &nbsp; H: ${this._data.forecast.maxTemperature}</p>
    `;
    this._headerEl.insertAdjacentHTML("beforeend", headerMarkup);

    let bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.cloudCoverage}</p>
      <p class="card__forecast-title">Cloud Coverage</p>
    `;
    this._bodyItem1.insertAdjacentHTML("beforeend", bodyMarkup);

    bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.humidity}</p>
      <p class="card__forecast-title">Humidity</p>
    `;
    this._bodyItem2.insertAdjacentHTML("beforeend", bodyMarkup);

    bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.precipitation}</p>
      <p class="card__forecast-title">Precipitation</p>
    `;
    this._bodyItem3.insertAdjacentHTML("beforeend", bodyMarkup);

    bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.uvIndex}</p>
      <p class="card__forecast-title">UV Index</p>
    `;
    this._bodyItem4.insertAdjacentHTML("beforeend", bodyMarkup);

    bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.windSpeed}</p>
      <p class="card__forecast-title">Wind Speeds</p>
    `;
    this._bodyItem5.insertAdjacentHTML("beforeend", bodyMarkup);

    bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.snowfall}</p>
      <p class="card__forecast-title">Snowfall</p>
    `;
    this._bodyItem6.insertAdjacentHTML("beforeend", bodyMarkup);

    bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.sunrise}</p>
      <p class="card__forecast-title">Sunrise</p>
    `;
    this._bodyItem7.insertAdjacentHTML("beforeend", bodyMarkup);

    bodyMarkup = `
      <p class="card__forecast-value">${this._data.forecast.sunset}</p>
      <p class="card__forecast-title">Sunset</p>
    `;
    this._bodyItem8.insertAdjacentHTML("beforeend", bodyMarkup);
  }
}

export default new WeatherView();
