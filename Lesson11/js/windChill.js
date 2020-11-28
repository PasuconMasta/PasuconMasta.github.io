function windChill() {
    const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=0266e2dbf3bd40f7c457a8100cb9c915";

    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
  
        var tempF = jsObject.list[0].main.temp;
        var speed = jsObject.list[0].wind.speed
    
  

    // Calculate the Wind Chill Factor
    var windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);

    // Round windChillFactor
    var digits = 1;
    var multiplier = Math.pow(10, digits);
    var windChillFactorRounded = Math.round(windChillFactor * multiplier ) / multiplier;

    if (tempF <= 50 && speed > 3) {
    document.getElementById("windChill").innerHTML = windChillFactorRounded + "°F";
    } else {
    document.getElementById("windChill").innerHTML = "N/A";
    }
});
}
 
window.onload = windChill