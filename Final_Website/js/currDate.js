	
	  var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
  var months = new Array();
      months[0] = "January";
      months[1] = "February";
      months[2] = "March";
      months[3] = "April";
      months[4] = "May";
      months[5] = "June";
      months[6] = "July";
      months[7] = "August";
      months[8] = "September";
      months[9] = "October";
      months[10] = "November";
      months[11] = "December";


function currentDate() {
var d = new Date();
var year = d.getFullYear();
var day = weekday[d.getDay()]
var month = months[d.getMonth()]
var date = d.getDate() 
var fullDate = "Current date: " + day + ", " + date + " " + month + " " + year
document.getElementById('currentdate').textContent = fullDate
}
window.onload = currentDate 


if ( day == "Saturday") {
    alert("Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.");
  }