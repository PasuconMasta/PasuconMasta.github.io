const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);   temporary checking for valid response and data parsing
 

  const towns = jsonObject['towns'];

  for (let i = 0; i < towns.length; i++ ) {
    let town = document.createElement('section');
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let motto = document.createElement('p');
    let year = document.createElement('p');
    let population = document.createElement('p');
    let rain = document.createElement('p');
  
    
    
    name.textContent = towns[i].name;
    image.setAttribute('src', towns[i].imageurl);
    image.setAttribute('alt', "picture of " + towns[i].name);
    image.setAttribute('height', '205');
    motto.textContent = 'Date of Birth: ' + towns[i].birthdate;
    year.textContent = 'Place of Birth: ' + towns[i].birthplace;
    
    
    town.appendChild(h2);
    town.appendChild(birthDate);
    town.appendChild(birthPlace);
    town.appendChild(image);
 
    
    document.querySelector('div.cards').appendChild(town);
}
});
    