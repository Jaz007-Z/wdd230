const requestURL = 'json/temples.json';
const spotlight = document.querySelector('.spotlight');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        console.log(temples);
        let spotlightTemple = temples.filter(temple => (temple.name === "Mount Timpanogos Utah Temple"));
        spotlightTemple = spotlightTemple[0];
        displaytemples(spotlightTemple);
    });




function displaytemples(temple) {
    // Create elements to add to the document
    const spotlight = document.querySelector('.hero');
    console.log(temple);


    let image = document.createElement('img');


    let infoDiv = document.createElement('div');
    let infoDivBasics = document.createElement('div');
    let website = document.createElement('a');
    let name = document.createElement('h3');
    let phase = document.createElement('p');
    let address = document.createElement('p');
    let telephone = document.createElement('p');
    let servicesDiv = document.createElement('div');
    let services = document.createElement('p');
    let form = document.createElement ('form');
    let button = document.createElement ('button');



    // Change the textContent property of the h2 element to contain the temple's full name
    website.textContent = temple.website;
    name.textContent = temple.name;
    phase.textContent = temple.phase;
    services.textContent = "Services: ";
    telephone.textContent = `PhoneNumber: ${temple.phoneNumber}`;
    address.textContent = temple.address;
    button.textContent = "Make a Reservation!";

    // servicesPrep = temple.services.filter(temple => (temple.services != "No"));
    servicesPrep = temple.services;
    servicesFiltered = servicesPrep.filter(service => (service[0] != 'N' && service[1] != 'o'));
    console.log(servicesFiltered);


    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', temple.imageurl);
    image.setAttribute('alt', temple.name);
    image.setAttribute('loading', 'lazy');
    infoDiv.setAttribute('class', "templeInfo");
    servicesDiv.setAttribute('class', "box templeServices");
    infoDivBasics.setAttribute('class', "box templeInfoBasics");
    form.setAttribute('action', 'reservation.html');
    form.setAttribute('class', 'reservationButton box');
    button.setAttribute('type', 'submit');
    


    // Add/append the section(spotlight) with the h2 element
    // spotlight.appendChild(name);
    console.log(name);
    spotlight.appendChild(image);
    spotlight.appendChild(infoDiv);
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
    infoDiv.appendChild(form);
    form.appendChild(button);
    
    // spotlight.appendChild(website);


}
