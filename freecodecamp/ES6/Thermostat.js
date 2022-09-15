class Thermostat {
  constructor(f) {
    this.c = (5 / 9) * (f - 32);
  }

  get temperature() {
    return this.c;
  }

  set temperature(value) {
    this.c = value;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
