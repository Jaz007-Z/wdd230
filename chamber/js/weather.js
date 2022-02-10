let t = parseFloat(document.querySelector("#temp").textContent);
let s = parseFloat(document.querySelector("#speedWind").textContent);
let windchill = "";

if (t <= 50 && s > 3) {
  windchill = windChill(t, s);
  windchill = `${windchill}&#176;F`;
} else {
  windchill = "N/A";
}
// output
document.querySelector("#windChill").innerHTML = windchill;

function windChill(temp, speed) {
//   return "SUCCESS";
  let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  return windChill.toFixed(2);
}
