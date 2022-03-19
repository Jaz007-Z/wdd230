const lastVisit = localStorage.getItem('lastVisit');

const FACTOR = 1000 * 60 * 60 * 24;

let daysBetween = Date.now() - lastVisit;

let numberOfDays = Math.round(daysBetween / FACTOR);

const daysSince = document.querySelector('#daysSince');

if (lastVisit == null) {
    daysSince.innerHTML = `Welcome to your first Visit!`
} else {
    daysSince.innerHTML = `Days since last visit: ${numberOfDays}`
}

localStorage.setItem('lastVisit', Date.now());


