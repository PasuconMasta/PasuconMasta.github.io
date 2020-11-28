const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);   temporary checking for valid response and data parsing
 

  const towns = jsonObject['towns'];

  
  for (let i = 0; i < towns.length; i++ ) {
    if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven"){
    let town = document.createElement('section');
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let motto = document.createElement('p');
    let year = document.createElement('p');
    let population = document.createElement('p');
    let rain = document.createElement('p');
  
    
    
    name.textContent = towns[i].name;
    image.setAttribute('src', "images/" + towns[i].photo);
    image.setAttribute('alt', "picture of " + towns[i].name);
    image.setAttribute('height', '205');
    motto.textContent = "motto: " + towns[i].motto;
    year.textContent = "since " + towns[i].yearFounded;
    population.textContent = "Population: " + towns[i].currentPopulation;
    rain.textContent = "Average rainfall: " + towns[i].averageRainfall;
    
    town.appendChild(name);
    town.appendChild(image);
    town.appendChild(motto);
    town.appendChild(year);
    town.appendChild(population);
    town.appendChild(rain);
  
 
    
    document.querySelector('div.town').appendChild(town);
    }
   
  
}
});
    