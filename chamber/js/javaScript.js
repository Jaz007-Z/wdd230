const menuButton = document.querySelector('.mainMenu');
const mainnav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);



const d = new Date();
let year = d.getFullYear();

// const copyright = document.querySelector('#copyright');
// copyright.innerHTML = `&copy; ${year} | James A. Zimsky | VA`;


const lastUpdated = document.querySelector('#lastMod');
lastUpdated.innerHTML = `<strong>Last updated: ${document.lastModified}</strong>`;

// var options = {  weekday: 'long', year: 'numeric', month: 'long'};
// var options = {  year: 'numeric', weekday: 'short', month: 'long'};
// var prnDt = d.toLocaleTimeString('en-us', options);
// console.log(prnDt)

var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var today = new Date();
// var date = weekday[today.getDay()] + ', ' + today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var date = weekday[today.getDay()] + ', ' + today.getDate() + " " + month[(today.getMonth()+1)] + ' ' + today.getFullYear();
// var date = weekday[today.getDay()] + ', ' + (today.getMonth()+1);
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;

const currentTime = document.querySelector('#time');
currentTime.innerHTML = `<strong> ${date}</strong>`;


  

// const options = { weekday: 'long' };
// const date = new Date();
// console.log(date.toLocaleDateString('en-US', options));