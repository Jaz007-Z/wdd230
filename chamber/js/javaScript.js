const menuButton = document.querySelector('.mainMenu');
const mainnav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);



const d = new Date();
let year = d.getFullYear();

// const copyright = document.querySelector('#copyright');
// copyright.innerHTML = `&copy; ${year} | James A. Zimsky | VA`;


const lastUpdated = document.querySelector('#lastMod');
lastUpdated.innerHTML = `<strong>Last updated: ${document.lastModified}</strong>`;



var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;

const currentTime = document.querySelector('#time');
currentTime.innerHTML = `<strong> ${date}</strong>`;

const day = d.getDay()
console.log("day: ", day)
if (day < 3 ) {
    document.querySelector(".banner").style.display="block";
}


document.querySelector(".banner__close").addEventListener("click", function () {
    this.closest(".banner").style.display = "none";
  });
  