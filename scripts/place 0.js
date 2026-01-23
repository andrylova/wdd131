const temperature = 24; // °C
const windSpeed = 12; // km/h

function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

function displayWindChill() {
  const windChillElement = document.querySelector("#windchill");

  if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }
}

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

displayWindChill();
