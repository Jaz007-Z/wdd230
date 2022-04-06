
async function getWheather() {
    const exclude = "minutely,current"
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&units=imperial&appid=af98801390ad8c67d0b28ab0ca82c8cb`;
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    document.querySelector('#temp').innerHTML = jsObject.current.temp;
    document.querySelector('#speedWind').innerHTML = jsObject.current.wind_speed;
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    let desc = jsObject.current.weather[0].description;
    desc = desc.split(" ").map(capitalize).join(' ');
    document.querySelector('#weatherIcon').setAttribute('src', iconsrc);
    document.querySelector('#weatherIcon').setAttribute('alt', desc);
    document.querySelector('#weatherDesc').textContent = desc;
    document.querySelector("#humidity").innerHTML = jsObject.current.humidity;

    // console.log(`Daily tomorrow attempt: ${daily}`)
    document.querySelector('#temp1').innerHTML = jsObject.daily[1].temp.day;
    const iconsrc1 = `https://openweathermap.org/img/w/${jsObject.daily[1].weather[0].icon}.png`;
    let desc1 = jsObject.daily[1].weather[0].description;

    document.querySelector('#temp2').innerHTML = jsObject.daily[2].temp.day;
    const iconsrc2 = `https://openweathermap.org/img/w/${jsObject.daily[2].weather[0].icon}.png`;
    let desc2 = jsObject.daily[2].weather[0].description;

    document.querySelector('#temp3').innerHTML = jsObject.daily[3].temp.day;
    const iconsrc3 = `https://openweathermap.org/img/w/${jsObject.daily[3].weather[0].icon}.png`;
    let desc3 = jsObject.daily[3].weather[0].description;

    // for future weather, using current weather as placeholder icon and desc
    document.querySelector('#weatherIcon1').setAttribute('src', iconsrc1);
    document.querySelector('#weatherIcon1').setAttribute('alt', desc1);
    document.querySelector('#weatherDesc1').textContent = desc1;

    document.querySelector('#weatherIcon2').setAttribute('src', iconsrc2);
    document.querySelector('#weatherIcon2').setAttribute('alt', desc2);
    document.querySelector('#weatherDesc2').textContent = desc2;

    document.querySelector('#weatherIcon3').setAttribute('src', iconsrc3);
    document.querySelector('#weatherIcon3').setAttribute('alt', desc3);
    document.querySelector('#weatherDesc3').textContent = desc3;

    if (typeof jsObject.alerts != 'undefined') {
        if (typeof jsObject.alerts.event != 'undefined') {
            if (jsObject.alerts.event) {
                document.querySelector(".banner").style.display = "block";

                document.querySelector(".bannerClose").addEventListener("click", function () {
                    this.closest(".banner").style.display = "none";
                });
                document.querySelector("alert").textContent = jsObject.alerts.event;
                document.querySelector("alertDesc").textContent = jsObject.alerts.description;
            }
        }
    }

}


function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

// run main function
getWheather();