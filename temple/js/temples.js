
const requestURL = 'json/temples.json';
// const requestURL = 'https://jaz007-z.github.io/wdd230/Temple/json/temples.json';

const cards = document.querySelector('.cards');


async function getTemples() {
  const apiURL = 'json/temples.json';
  const response = await fetch(apiURL);
  const jsonObject = await response.json();
  const temples = jsonObject['temples'];
  console.log(temples);
  await temples.forEach(displayTemples);
  // displayTemples(temples[0]);
  addCardEvent();
}

function displayTemples(temple, x = 0) {
  console.log(`displayTemples i: ${x}`)
  // Create elements to add to the document
  let card = document.createElement('section');
  // const card = document.querySelector('.card');
  // console.log(temple);


  let image = document.createElement('img');
  let imageDiv = document.createElement('div');


  let infoDiv = document.createElement('div');
  let infoDivBasics = document.createElement('div');
  let infoDivExtra = document.createElement('div');
  let website = document.createElement('a');
  let name = document.createElement('h3');
  let phase = document.createElement('p');
  let address = document.createElement('p');
  let telephone = document.createElement('p');
  let servicesDiv = document.createElement('div');
  let services = document.createElement('p');
  let scheduleInfo = document.createElement('p');
  let ordinanceSchedule = document.createElement('p');
  let sessionSchedule = document.createElement('p');




  // Change the textContent property of the h2 element to contain the temple's full name
  website.textContent = temple.website;
  name.textContent = temple.name;
  phase.textContent = temple.phase;
  services.innerHTML = "<strong>Services: </strong>";
  telephone.textContent = `PhoneNumber: ${temple.phoneNumber}`;
  address.textContent = temple.address;

  scheduleInfo.innerHTML = "<strong>Schedule: </strong>";
  ordinanceSchedule.textContent = temple.ordinanceSchedule;
  sessionSchedule.textContent = temple.sessionSchedule;
  // button.textContent = "Make a Reservation!";

  // servicesPrep = temple.services.filter(temple => (temple.services != "No"));
  servicesPrep = temple.services;
  servicesFiltered = servicesPrep.filter(service => (service[0] != 'N' && service[1] != 'o'));
  // console.log(servicesFiltered);


  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  card.setAttribute('class', "section card");
  image.setAttribute('src', temple.imageurl);
  image.setAttribute('alt', temple.name);
  image.setAttribute("class", "cardImage")
  image.setAttribute('loading', 'lazy');
  imageDiv.setAttribute('class', 'imageCardDiv')
  infoDiv.setAttribute('class', "templeInfoCard");
  // infoDiv.setAttribute('class', "templeInfo templeInfoCard");
  servicesDiv.setAttribute('class', "box templeServicesCard");
  infoDivBasics.setAttribute('class', "box templeInfoBasicsCard");
  infoDivExtra.setAttribute('class', `box extraTempleInfo extraTempleInfo${x}`)



  // Add/append the section(card) with the h2 element
  // card.appendChild(name);
  cards.appendChild(card);
  // card.appendChild(image); put in infodiv
  card.appendChild(infoDiv);
  // infoDiv.appendChild(image); //put image in infoDiv
  infoDiv.appendChild(imageDiv);
  imageDiv.appendChild(image);
  infoDiv.appendChild(infoDivBasics);
  infoDivBasics.appendChild(name);
  infoDivBasics.appendChild(phase);
  infoDivBasics.appendChild(address);
  infoDivBasics.appendChild(telephone);
  infoDiv.appendChild(servicesDiv);
  servicesDiv.appendChild(services);
  for (i = 0; i < temple.services.length; i++) {
    let service = document.createElement('p');
    service.textContent = temple.services[i];
    servicesDiv.appendChild(service);
  }


  infoDiv.appendChild(infoDivExtra);
  infoDivExtra.appendChild(scheduleInfo);
  infoDivExtra.appendChild(ordinanceSchedule);
  infoDivExtra.appendChild(sessionSchedule);

  let historyIntro = document.createElement('p');
  historyIntro.innerHTML = "<strong>History: </strong>";
  infoDivExtra.appendChild(historyIntro);
  for (i = 0; i < temple.history.length; i++) {
    let history = document.createElement('p');
    history.textContent = temple.history[i];
    infoDivExtra.appendChild(history);
  }
  let templeClosureScheduleIntro = document.createElement('p');
  templeClosureScheduleIntro.innerHTML = "<strong>Temple Closure Schedule: </strong>";
  infoDivExtra.appendChild(templeClosureScheduleIntro);
  for (i = 0; i < temple.templeClosureSchedule.length; i++) {
    let templeClosureSchedule = document.createElement('p');
    templeClosureSchedule.textContent = temple.templeClosureSchedule[i];
    infoDivExtra.appendChild(templeClosureSchedule);

  }
  addLikeButton(imageDiv, x);

}

function addLikeButton(infoDiv, x) {
  console.log(`addKLikeButton i: ${x}`) 
  let heart = document.createElement('img');
  heart.setAttribute('alt', "Heart");
  heart.setAttribute('src', "images/heart.png");
  heart.setAttribute('class', 'heart');
  if (window.localStorage.getItem(`favorite${x}`)) {
    heart.classList.toggle('favorite');
  }
  heart.addEventListener('click', () => {
    console.log("heart touched");
    if (window.localStorage.getItem(`favorite${x}`)) {
      window.localStorage.removeItem(`favorite${x}`);
      heart.classList.toggle('favorite');
    } else {
      window.localStorage.setItem(`favorite${x}`, 'on');
      heart.classList.toggle('favorite');
    }
    event.stopImmediatePropagation();
  }, false);


  infoDiv.appendChild(heart);
}


function addCardEvent() {
  const card = document.querySelectorAll('.card');

  // const infoDiv = document.querySelectorAll('.templeInfo');
  const infoDiv = document.querySelectorAll('.extraTempleInfo');

  // console.log(mainnav);


  for (var i = 0; i < card.length; i++) {
    const infoDiv = document.querySelector(`.extraTempleInfo${i}`);
    card[i].addEventListener('click', () => { console.log("card clickedF"); }, false);
    card[i].addEventListener('click', () => {infoDiv.classList.toggle('extraTempleInfo')}, false);

    infoDivTest = infoDiv[i];
    console.log(infoDivTest);
    // card[i].addEventListener('click', () => { infoDivTest.classList.toggle('showExtraInfo') }, false);
    // card[i].addEventListener('click', () => {mainnav.classList.toggle('showExtraInfo')}, false);
    // card[i].addEventListener('click', () => { infoDiv[i].classList.toggle('showExtraInfo') }, false);
    // card[i].addEventListener('click', () => { infoDiv.classList.toggle('showExtraInfo') }, false);


    // card[i].addEventListener('click', () => {infoDiv[i].classList.add('.showExtraInfos')}, once="true");

  }
}
getTemples();

// const card = document.querySelectorAll('.card');

const headerTop = document.querySelector('.headerTop');


// console.log(cards);
// const infoDiv = document.querySelectorAll('.extraTempleInfo');

// // card.addEventListener('click', () => {infoDiv.classList.toggle('extraTempleInfo')}, false);
// // if (card) {
// //   card.addEventListener('click', () => { console.log("card clickedF"); }, false);
// //   menuButton.addEventListener('click', () => { console.log("card clickedF"); }, false);
// // }
// menuButton.addEventListener('click', () => {console.log("card clickedF");}, false);
// for(var i = 0; i < card.length;i++) {
// card[i].addEventListener('click', () => {console.log("card clickedF"); }, false);
// }
// // card.addEventListener('click', () => {console.log("card clickedF"); }, false);