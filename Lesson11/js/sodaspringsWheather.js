
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=0266e2dbf3bd40f7c457a8100cb9c915";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    const curTemp = document.querySelector('#curTemp');
    const humidity = document.querySelector('#humidity');
    const windSpeed = document.querySelector('#windSpeed');
    
    
    curTemp.textContent = jsObject.list[0].main.temp; 
    humidity.innerHTML = jsObject.list[0].main.humidity;
    windSpeed.innerHTML = jsObject.list[0].wind.speed;

    

    
  });
  

  const Api  = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=0266e2dbf3bd40f7c457a8100cb9c915";
fetch(Api)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        var weekDay = new Array(7);
        weekDay[0] = "SUN";
        weekDay[1] = "MON";
        weekDay[2] = "TUE";
        weekDay[3] = "WED";
        weekDay[4] = "THU";
        weekDay[5] = "FRI";
        weekDay[6] = "SAT";
        var x = 1;
        for (var i = 0; i < jsObject.list.length; i++ ) {
            var varTime = jsObject.list[i].dt_txt.substring(11);
            var varDate = new Date(jsObject.list[i].dt * 1000);
            var varDay = weekDay[varDate.getDay()];
            if (varTime == '18:00:00' && x <= 5) {
                var temp = jsObject.list[i].main.temp;
                document.getElementById('day' + x).textContent = varDay;
                document.getElementById('temp' + x).textContent = temp;
                var imageSrc = `https://openweathermap.org/img/w/${jsObject.list[i].weather[0].icon}.png`;
                var desc = jsObject.list[i].weather[0].description;
                document.getElementById('weatherIcon' + x).setAttribute('src', imageSrc);
                document.getElementById('weatherIcon' + x).setAttribute('alt', desc);
                x++
            }
        }
});

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
 

  const towns = jsonObject['towns'];

  
  for (let i = 0; i < towns.length; i++ ) {
    if (towns[i].name == "Soda Springs" ){
    let town = document.createElement('section');
    let image = document.createElement('img');
    let event = document.createElement('h2');
    let eventDescription = document.createElement('p');
    
  
    
    image.setAttribute('src', "https://images.unsplash.com/photo-1597000920323-0e6f73a1f9de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80");
    image.setAttribute('alt', "picture of " + towns[i].name);
    image.setAttribute('height', '205');
    event.textContent =  towns[i].events[0];
    eventDescription.innerHTML = "Come down to Rocky Fork Park! On febuary 29th we are havning a town event, singing the Geyser Song and watching Rocky Fork gyser blow. No Tickets needed! just bring snacks and prepare to have a good time"
    
    town.appendChild(image);
    town.appendChild(event);
    town.appendChild(eventDescription);
  
    document.querySelector('div.event').appendChild(town);
    }
   
  
}
});