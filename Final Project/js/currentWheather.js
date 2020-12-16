const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&APPID=0266e2dbf3bd40f7c457a8100cb9c915";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const curTemp = document.querySelector('#curTemp');
    const humidity = document.querySelector('#humidity');
    const condition = document.querySelector('#conditions');
    
    
    
    curTemp.textContent = jsObject.list[0].main.temp; 
    humidity.innerHTML = jsObject.list[0].main.humidity;
    condition.innerHTML = jsObject.list[0].weather[0].description;

   
    

    
  });
  