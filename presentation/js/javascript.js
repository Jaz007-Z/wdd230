//adds key value pair

function setItemLocalStorage() {
    window.localStorage.setItem('name', 'Jason Blazzard the great');
}

function getItemLocalStorage() {
    document.querySelector('#getPair1').textContent = window.localStorage.getItem('name');
}

function setObjectLocalStorage() {
    const person = {
        name: "Jason Blazzard",
        location: "Idaho",
        venmo: "xxx-xxxxx-xxxx"
    }
    // you must stringify it first
    window.localStorage.setItem('user', JSON.stringify(person));
}

function getObjectLocalStorage() {
    //without parsing it first
    console.log(window.localStorage.getItem('user'));

    //must parse the object for it to be a javascript object
    const user = JSON.parse(window.localStorage.getItem('user'));
    document.querySelector('#getObject1').textContent = user.name;
    document.querySelector('#getObject2').textContent = user.venmo;
}

function removeKeyPairValue() {
    //can remove a key pair value by providing a key
    window.localStorage.removeItem('name');
}

function clearLocalStorage() {
    //The localStorage has been cleared. It only clears localStorage for that domain. 
    window.localStorage.clear();
}