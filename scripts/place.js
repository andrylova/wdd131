// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather values
const temperature = 24; // °C
const windSpeed = 12;   // km/h

document.getElementById("temperature").textContent = temperature;
document.getElementById("windspeed").textContent = windSpeed;

// Wind chill calculation
function calculateWindChill(temp, speed) {
  if (temp <= 10 && speed > 4.8) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(speed, 0.16) +
      0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1) + " °C";
  }
  return "N/A";
}

document.getElementById("windchill").textContent =
  calculateWindChill(temperature, windSpeed);
