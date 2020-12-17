const localJSON = 
  {
      "id": 1,
      "name": "Honda Metro Scooter",
      "Max Persons": 1,
      "half-day-reseved": 20,
      "half-day-walkin": 25,
      "full-day-reseved": 30,
      "full-day-walkin": 35
      
  }


fetch(localJSON)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);   //temporary checking for valid response and data parsing
 

  const towns = jsonObject['prices'];

  
  for (let i = 0; i < prices.length; i++ ) {
    let price = document.createElement('section');
    let name = document.createElement('h2');
    // let image = document.createElement('img');
    // let motto = document.createElement('p');
    // let year = document.createElement('p');
    // let population = document.createElement('p');
    // let rain = document.createElement('p');
  
    
    
    name.textContent = prices[i].name;
    // image.setAttribute('src', "images/" + prices[i].photo);
    // image.setAttribute('alt', "picture of " + prices[i].name);
    // image.setAttribute('height', '205');
    // motto.textContent = "motto: " + towns[i].motto;
    // year.textContent = "since " + towns[i].yearFounded;
    // population.textContent = "Population: " + towns[i].currentPopulation;
    // rain.textContent = "Average rainfall: " + towns[i].averageRainfall;
    
    price.appendChild(name);
    // town.appendChild(image);
    // town.appendChild(motto);
    // town.appendChild(year);
    // town.appendChild(population);
    // town.appendChild(rain);
  
 
    
    document.querySelector('div.prices').appendChild(prices);
    
   
  
}
});