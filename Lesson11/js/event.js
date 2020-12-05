const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);   temporary checking for valid response and data parsing
 

  const towns = jsonObject['towns'];

  
  for (let i = 0; i < towns.length; i++ ) {
    if (towns[i].name == "Preston" ){
    let town = document.createElement('section');
    let image = document.createElement('img');
    let event = document.createElement('h2');
    let eventDescription = document.createElement('p');
    
  
    
    image.setAttribute('src', "images/" + towns[i].name + "Event.jpg");
    image.setAttribute('alt', "picture of " + towns[i].name);
    image.setAttribute('height', '205');
    event.textContent =  towns[i].events[0];
    eventDescription.textContent = "Come down to Work Creek! On March 29th we are having a bluegrass/folk music revival. Tickects will be on sale starting january first, prices may go up as we get closer to march 29th so get your tickets today! "
    
    town.appendChild(image);
    town.appendChild(event);
    town.appendChild(eventDescription);
  
    document.querySelector('div.event').appendChild(town);
    }
   
  
}
});