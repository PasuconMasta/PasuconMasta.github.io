const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=0266e2dbf3bd40f7c457a8100cb9c915";

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
  