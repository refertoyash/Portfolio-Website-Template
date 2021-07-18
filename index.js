// Javascript for typewriting effect 
// greeting msg ....
if(localStorage.getItem('name')==null){
    localStorage.setItem('name' , prompt("Enter your Name :"));
  
  
}
var a=  document.getElementById('greeting');
a.innerHTML= `Welcome ${localStorage.getItem('name')}...`;

// Javascript for analog date and time 
window.onload = setInterval(clock, 1000);

function clock() {
  var d = new Date();

  var date = d.getDate();

  var month = d.getMonth();
  var montharr = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  month = montharr[month];

  var year = d.getFullYear();
  var day = d.getDay();
  var dayarr = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  day = dayarr[day];

  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  document.getElementById("date").innerHTML = day + ", " + date + " " + month + " " + year;
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
}



// Institute site open js 


function open1(){
  location.href="http://www.maharishividyamandir.com/" ;
}
function open2(){
  location.href="https://vv.newrsj.in/" ;
}
function open3(){
  location.href="http://www.mmmut.ac.in/" ;
}
