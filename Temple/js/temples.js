// const cardView = document.querySelector('.cardViewButton');
// // const selectView = document.querySelector('.cards');
// const listView = document.querySelector('.listViewButton');

// cardView.addEventListener('click', () => {cards.classList.add('cards')}, once="true");
// cardView.addEventListener('click', () => {cards.classList.remove('switchListView')}, once="true");

// listView.addEventListener('click', () => {cards.classList.add('switchListView')}, once="true");
// listView.addEventListener('click', () => {cards.classList.remove('cards')}, once="true");




// const requestURL = 'https://jaz007-z.github.io/wdd230/chamber/json/businessDirectory.json';
// const cards = document.querySelector('.cards');


// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     const businesss = jsonObject['businesses'];
//     businesss.forEach(displayBusinesses);
//   });




// function displayBusinesses(business) {
//     // Create elements to add to the document
//     let card = document.createElement('section');
//     let logo = document.createElement('img');
//     let address = document.createElement('p');
//     let phoneNumber = document.createElement('p');
//     let website = document.createElement('a');
//     let name = document.createElement('p');


//     // Change the textContent property of the h2 element to contain the business's full name
//     address.textContent = business.address;
//     phoneNumber.textContent = business.phoneNumber;
//     website.textContent = business.website;
//     name.textContent = business.name;

//     // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
//     logo.setAttribute('src', business.imageurl);
//     logo.setAttribute('loading', 'lazy');


//     // Add/append the section(card) with the h2 element
//     // card.appendChild(h2);
//     card.appendChild(name)
//     card.appendChild(logo);
//     card.appendChild(address);
//     card.appendChild(phoneNumber);
//     card.appendChild(website);



//     // Add/append the existing HTML div with the cards class with the section(card)
//     cards.appendChild(card);

//   }



// -------------------------------------------------------------------------------------

const requestURL = 'json/temples.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    // console.log(temples);
    temples.forEach(displayTemples);
  });




function displayTemples(temple, extraInfo=false) {
  // Create elements to add to the document
  let card = document.createElement('section');
  // const card = document.querySelector('.card');
  // console.log(temple);


  let image = document.createElement('img');


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
  // let form = document.createElement ('form');
  // let button = document.createElement ('button');
  let scheduleInfo = document.createElement('p');
  let ordinanceSchedule = document.createElement('p');
  let sessionSchedule = document.createElement('p');




  // Change the textContent property of the h2 element to contain the temple's full name
  website.textContent = temple.website;
  name.textContent = temple.name;
  phase.textContent = temple.phase;
  services.textContent = "Services: ";
  telephone.textContent = `PhoneNumber: ${temple.phoneNumber}`;
  address.textContent = temple.address;

  scheduleInfo.textContent = "Schedule: ";
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
  image.setAttribute('loading', 'lazy');
  infoDiv.setAttribute('class', "templeInfo");
  servicesDiv.setAttribute('class', "box templeServices");
  infoDivBasics.setAttribute('class', "box templeInfoBasics");
  infoDivExtra.setAttribute('class', "box")

  // form.setAttribute('action', 'reservation.html');
  // form.setAttribute('class', 'reservationButton box');
  // button.setAttribute('type', 'submit');



  // Add/append the section(card) with the h2 element
  // card.appendChild(name);
  // console.log(name);
  cards.appendChild(card);
  card.appendChild(image);
  card.appendChild(infoDiv);
  infoDiv.appendChild(infoDivBasics);
  infoDivBasics.appendChild(name);
  infoDivBasics.appendChild(phase);
  infoDivBasics.appendChild(address);
  infoDivBasics.appendChild(telephone);
  infoDiv.appendChild(servicesDiv);
  servicesDiv.appendChild(services);
  for (i = 0; i < servicesFiltered.length; i++) {
    let service = document.createElement('p');
    service.textContent = servicesFiltered[i];
    servicesDiv.appendChild(service);
  }

  console.log(extraInfo)
  if (extraInfo == false) {
    infoDiv.appendChild(infoDivExtra);
    infoDivExtra.appendChild(scheduleInfo);
    infoDivExtra.appendChild(ordinanceSchedule);
    infoDivExtra.appendChild(sessionSchedule);
  
  let historyIntro = document.createElement('p');
  historyIntro.textContent = "History: ";
  infoDivExtra.appendChild(historyIntro);
  for (i = 0; i < temple.history.length; i++) {
    let history = document.createElement('p');
    history.textContent = temple.history[i];
    infoDivExtra.appendChild(history);
  }
  let templeClosureScheduleIntro = document.createElement('p');
  templeClosureScheduleIntro.textContent = "Temple Closure Schedule: ";
  infoDivExtra.appendChild(templeClosureScheduleIntro);
  for (i = 0; i < temple.templeClosureSchedule.length; i++) {
    let templeClosureSchedule = document.createElement('p');
    templeClosureSchedule.textContent = temple.templeClosureSchedule[i];
    infoDivExtra.appendChild(templeClosureSchedule);
  } 
}

  // infoDiv.appendChild(form);
  // form.appendChild(button);s

  // card.appendChild(website);


}
