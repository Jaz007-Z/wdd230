const apiURL = "http://api.openweathermap.org/data/2.5/weather?lat=64.8378&lon=-147.7164&appid=af98801390ad8c67d0b28ab0ca82c8cb";
// async function getWheather() {
//   const apiURL = "http://api.openweathermap.org/data/2.5/weather?lat=64.8378&lon=-147.7164&appid=af98801390ad8c67d0b28ab0ca82c8cb";
// }
// var s = 0;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#temp').innerHTML = jsObject.main.temp;
    document.querySelector('#speedWind').innerHTML = jsObject.wind.speed;
    // s = jsObject.wind.speed;
    console.log(jsObject.wind.speed);

    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let desc = jsObject.weather[0].description;
    desc = desc.split(" ").map(capitalize).join(' ');
    document.querySelector('#weatherIcon').setAttribute('src', iconsrc);
    document.querySelector('#weatherIcon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;



    let t = jsObject.main.temp;
    let s = jsObject.wind.speed;
    let windchill = "";
    // console.log(s);

    if (t <= 50 && s > 3) {
      windchill = windChill(t, s);
      windchill = `${windchill}&#176;F`;
    } else {
      windchill = "N/A";
    }
    // output
    document.querySelector("#windChill").innerHTML = windchill;

  });

// let t = parseFloat(document.querySelector("#temp").innerHTML);
// // let t = 30;
// s = parseFloat(document.querySelector("#speedWind").innerHTML);
// let windchill = "";
// console.log(s);

// if (t <= 50 && s > 3) {
//   windchill = windChill(t, s);
//   windchill = `${windchill}&#176;F`;
// } else {
//   windchill = "N/A";
// }
// // output
// document.querySelector("#windChill").innerHTML = windchill;

function windChill(temp, speed) {
  let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  return windChill.toFixed(2);
}

function capitalize(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}