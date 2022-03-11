// const requestURL = 'https://jaz007-z.github.io/wdd230/chamber/json/businessDirectory.json';
const requestURL = 'json/businessDirectory.json';
// const spotlights = document.querySelector('.spotlightBox1');
const spotlight = document.querySelector('.spotlightBox1');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const businesses = jsonObject['businesses'];
        let businessesGold = businesses.filter(business => (business.memberRank === 'Gold'));
        // console.log(businessesGold);
        // console.log(businessesGold.length);
        // number = Math.floor(Math.random() * businessesGold.length);
        // console.log(number);
        // console.log(businessesGold[number]);
        for (i = 0; i < 3; i++) {
            x = Math.floor(Math.random() * businessesGold.length);
            console.log(x)
            displayBusinesses(businessesGold[x], `.spotlightBox${i+1}`);
            businessesGold = businessesGold.filter(business => (business.name != businessesGold[x].name));
        }
        // displayBusinesses(businessesGold[0]);
    });


//   const businesss = jsonObject['businesss'];


function displayBusinesses(business, spotlightBox) {
    // Create elements to add to the document
    const spotlight = document.querySelector(spotlightBox);
    console.log(business)
    // const spotlight = document.querySelector('.spotlightBox1');


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
    // spotlight.appendChild(h2);
    spotlight.appendChild(name)
    spotlight.appendChild(logo);
    // spotlight.appendChild(address);
    // spotlight.appendChild(phoneNumber);
    spotlight.appendChild(website);



    // Add/append the existing HTML div with the spotlights class with the section(spotlight)
    // spotlights.appendChild(spotlight);

}
