const requestURL = 'https://jaz007-z.github.io/wdd230/chamber/json/businessDirectory.json';
const spotlight = document.querySelector('.spotlightBox1');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        let businessesGold = businesses.filter(business => (business.memberRank === 'Gold' || business.memberRank === 'Silver'));
        for (i = 0; i < 3; i++) {
            x = Math.floor(Math.random() * businessesGold.length);
            displayBusinesses(businessesGold[x], `.spotlightBox${i+1}`);
            businessesGold = businessesGold.filter(business => (business.name != businessesGold[x].name));
        }
    });




function displayBusinesses(business, spotlightBox) {
    // Create elements to add to the document
    const spotlight = document.querySelector(spotlightBox);


    let logo = document.createElement('img');
    let website = document.createElement('a');
    let name = document.createElement('h3');


    // Change the textContent property of the h2 element to contain the business's full name
    website.textContent = business.website;
    name.textContent = business.name;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', business.imageurl);
    logo.setAttribute('loading', 'lazy');


    // Add/append the section(spotlight) with the h2 element
    spotlight.appendChild(name)
    spotlight.appendChild(logo);
    spotlight.appendChild(website);

}
