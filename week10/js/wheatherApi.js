const apiURL = "http://api.openweathermap.org/data/2.5/weather?lat=64.8378&lon=-147.7164&appid=af98801390ad8c67d0b28ab0ca82c8cb";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#current-temp').textContent = jsObject.main.temp;
        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
    });

