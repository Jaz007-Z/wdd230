const cardView = document.querySelector('.cardViewButton');
// const selectView = document.querySelector('.cards');
const listView = document.querySelector('.listViewButon');

cardView.addEventListener('click', () => {cards.classList.add('cards')}, once="true");
cardView.addEventListener('click', () => {cards.classList.remove('switchListView')}, once="true");

listView.addEventListener('click', () => {cards.classList.add('switchListView')}, once="true");
listView.addEventListener('click', () => {cards.classList.remove('cards')}, once="true");




const requestURL = 'https://jaz007-z.github.io/wdd230/chamber/json/businessDirectory.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesss = jsonObject['businesses'];
    businesss.forEach(displayBusinesses);
  });




function displayBusinesses(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let website = document.createElement('a');
    let name = document.createElement('p');
    
  
    // Change the textContent property of the h2 element to contain the business's full name
    address.textContent = business.address;
    phoneNumber.textContent = business.phoneNumber;
    website.textContent = business.website;
    name.textContent = business.name;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', business.imageurl);
    logo.setAttribute('loading', 'lazy');
    
  
    // Add/append the section(card) with the h2 element
    // card.appendChild(h2);
    card.appendChild(name)
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(website);
    

  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
    
  }
