window.addEventListener('load', init);

class Contact {
  constructor(givenName, familyName, phoneNumber) {
    this.givenName = givenName;
    this.familyName = familyName;
    this.phoneNumber = phoneNumber;
  }
}

let db = [];
let newContact;
let name = document.querySelector('#name');
let surname = document.querySelector('#surname');
let phone = document.querySelector('#phone');
let list = document.querySelector('.list');


function init() {
  //event listener
  let addCont = document.querySelector('#addCont');
  addCont.addEventListener('click', addContact);

  let listCont = document.querySelector('#listCont');
  listCont.addEventListener('click', listContact);

  name.addEventListener('focus', clear);
  surname.addEventListener('focus', clear);
  phone.addEventListener('focus', clear);
}

function addContact() {
  newContact = new Contact(name.value, surname.value, phone.value);
  db.push(newContact);
}

function listContact() {
  let ul = document.querySelector('#list');
  ul.innerHTML = "";
  for (let i = 0; i < db.length; i++) {
    let li = document.createElement('li');
    li.innerHTML += "<h1> Contact " + (i + 1) + "</h1>";
    li.innerHTML += "Name: " + db[i].givenName + "<br>";
    li.innerHTML += "Surname: " + db[i].familyName + "<br>";
    li.innerHTML += "Phone: " + db[i].phoneNumber + "<br>";
    list.classList.add('contactList');
    ul.append(li);
  }
}

function clear() {
  return this.value = "";
}
