	
// 	  var weekday = new Array(7);
//       weekday[0] = "Sun";
//       weekday[1] = "Mon";
//       weekday[2] = "Tue";
//       weekday[3] = "Wed";
//       weekday[4] = "Thur";
//       weekday[5] = "Fri";
//       weekday[6] = "Sat";


// function forecast() {

// var d = new Date();
// var day = [d.getDay()]
// var count = 1;
// document.getElementById('forecast' + count).textContent = weekday[day];

//     while (count < 7)
//     {
//     if (day == 6)
//         {day = 0}

//     count++;
//     document.getElementById('forecast' + count).textContent = weekday[day];
//     day++;
//     }
  
// }
// window.onload = forecast;




const Api  = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=0266e2dbf3bd40f7c457a8100cb9c915";
fetch(Api)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
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