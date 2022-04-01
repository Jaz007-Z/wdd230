const menuButton = document.querySelector('.mainMenu');
const mainnav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

const d = new Date();
let year = d.getFullYear();


const lastUpdated = document.querySelector('#lastMod');
lastUpdated.innerHTML = `<strong>Last updated: ${document.lastModified}</strong>`;

// var month= ["January","February","March","April","May","June","July",
//             "August","September","October","November","December"];
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// var today = new Date();
// var date = weekday[today.getDay()] + ', ' + today.getDate() + " " + month[(today.getMonth()+1)] + ' ' + today.getFullYear();

// const currentTime = document.querySelector('#time');
// currentTime.innerHTML = `<strong> ${date}</strong>`;


