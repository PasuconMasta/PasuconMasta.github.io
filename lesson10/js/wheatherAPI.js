const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=0266e2dbf3bd40f7c457a8100cb9c915";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const curTemp = document.querySelector('#current-temp');
    const iconsrc = document.querySelector('#imagesrc');
    const icon = document.querySelector('#icon');

    curTemp.innerHTML = jsObject.list[0].main.temp; 

    iconsrc.textContent = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    isrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    icon.setAttribute('src',isrc);   
    icon.setAttribute('alt',jsObject.weather[0].description);

    
  });