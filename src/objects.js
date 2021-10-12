const objects = (() => {
  // class to hold our OpenWeather API info
  class Weather {
    constructor(name, current, high, low, humidity, type, icon) {
      this.name = name;
      this.current = current;
      this.high = high;
      this.low = low;
      this.humidity = humidity;
      this.type = type;
      this.icon = icon;
    }
    convertToF(temp) {
      return Math.round((temp - 273.15) * 1.8 + 32);
    }

    convertToC(temp) {
      return Math.round(temp - 273.15);
    }
  }

  return {
    Weather,
  };
})();

export { objects };
